import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import java.net.HttpURLConnection;
import java.net.URL;

public class RESTDemo {
    private static final String BASE_URL = "http://query.yahooapis.com/v1/public/yql";

    public static void requestStock(String symbol) throws IOException {
        String request = BASE_URL +
                "?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" +
                symbol +
                "%22)&env=store://datatables.org/alltableswithkeys&format=json";

        System.out.println("request URL: " + request);

        URL url = new URL(request);
        HttpURLConnection connection = (HttpURLConnection)url.openConnection();

        connection.setRequestMethod("GET");
        connection.setConnectTimeout(10000);
        connection.setReadTimeout(10000);

        // Created a BufferedReader to read the contents of the request.
        BufferedReader in = new BufferedReader(
                new InputStreamReader(connection.getInputStream()));
        String inputLine;
        StringBuilder response = new StringBuilder();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }

        // MAKE SURE TO CLOSE YOUR CONNECTION!
        in.close();

        // response is the contents of the XML
        System.out.println(response.toString());
    }

    public static void main(String[] args) throws IOException {
        for( String arg : args ) {
            requestStock(arg);
        }
    }
}