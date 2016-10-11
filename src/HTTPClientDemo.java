import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.Socket;
import java.net.URL;
import java.net.URLConnection;

/**
 * Created by robertstjacquesjr on 9/6/16.
 */
public class HTTPClientDemo {
//    Method SP URI SP HTTP-Version CRLF
//
//    HTTP/1.0 200 OK
//
//    GET /index.html HTTP/1.1
//    Host: www.google.com
//    Connection: keep-alive
//    Cache-Control: no-cache
//    Pragma: no-cache
//    Accept: text/html,application/xhtml+xml,application/xml;q=0.

    /**
     * Uses the java.net.URL API to execute an HTTP GET with the specified resource URL.
     *
     * @param resource The URL to GET.
     * @return A string version of whatever is retrieved from the GET (e.g. HTML).
     * @throws IOException If something goes wrong.
     */
    public static String testWithURL(String resource) throws IOException {
        //create a URL from the resource string
        URL url = new URL(resource);
        // open a new connection to manage the HTTP protocol
        URLConnection connection = url.openConnection();

        // create a buffer to store the result of the GET
        StringBuffer buf = new StringBuffer();

        // open an input stream to read the data at the other end.  The HTTP protocol details are managed
        // by the URL connection.  The stream returns only content.
        try( InputStream input = connection.getInputStream()) {
            byte[] buffer = new byte[10240];
            int n;

            while ((n = input.read(buffer)) > 0) {
                buf.append(new String(buffer, 0, n));
            }
        }

        // return the data as a string
        return buf.toString();
    }

    /**
     * Uses vanilla sockets to execute an HTTP 1.0 GET request against the specified server.
     *
     * @param host The hostname to connect to.
     * @param port The port on the host to connect to.
     * @param resource The resource on the server to request.
     * @return A String version of any data that is retrieved from the GET.
     * @throws IOException If something goes wrong.
     */
    public static String testWithSockets(String host, int port, String resource) throws IOException {
        // create the request string to do an HTTP GET
        String request = "GET http://" + host + ":" + port + "/" + resource + " HTTP/1.0\n\n";

        // open ap lain socket
        Socket sock = new Socket(host, port);

        StringBuffer buffer = new StringBuffer();
        try(OutputStream output = sock.getOutputStream();
            InputStream input = sock.getInputStream()) {

            // send the request string
            output.write(request.getBytes());
            output.flush();

            // read the response
            byte[] data = new byte[10240];
            int n;
            while((n = input.read(data)) > 0 ) {
                buffer.append(new String(data, 0, n));
            }
        }

        // return the response as a string
        return buffer.toString();
    }


    /**
     * Uses the other methods in the class to execute HTTP GET requests against different servers
     * with and without the java.net.URL classes.
     *
     * @param args
     *
     * @throws IOException If something goes wrong trying to establish or reas from the connection.
     */
    public static void main(String[] args) throws IOException {
        //System.out.println(testWithURL("http://localhost:80"));
        //System.out.println(testWithURL("http://www.google.com:80"));

        //System.out.println(testWithSockets("www.google.com", 80));
        System.out.println(testWithSockets("localhost", 80, "index.html"));
    }
}
