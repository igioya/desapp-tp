package utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;


public class MapsTest {
	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}
	
	@Test
	public void test() throws IOException, JSONException{
		String fromAddress = "Quilmes, Gaboto 649, Quilmes, Buenos Aires";
		String toAddress = "Berazategui Municipalidad, Av. 14 3150, B1884CTS Gran Buenos Aires, Buenos Aires";
		String API_KEY = "AIzaSyAzaSxsKDUNelh_OQcOyNOPJExOqJetn70";
		String urlString = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric"
				+ "&origins=" +fromAddress.replace(" ", "+")
				+ "&destinations=" + toAddress.replace(" ", "+")
				+ "&key=" + API_KEY;
		
		URL url = new URL(urlString);
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		
		con.setRequestMethod("GET");
		con.setRequestProperty("Content-Type", "application/json");
		
		BufferedReader in = new BufferedReader(
		new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer resp = new StringBuffer();
		
		while ((inputLine = in.readLine()) != null) {
		    resp.append(inputLine);
		}
		System.out.println(resp);
		in.close();
		con.disconnect();
		
		JSONObject elements = new JSONObject(resp.toString()).getJSONArray("rows")
 														 	 .getJSONObject(0)
 														 	 .getJSONArray ("elements")
 														 	 .getJSONObject(0);
		
		String distance = elements.getJSONObject("distance").get("text").toString();
		String duration =  elements.getJSONObject("duration").get("text").toString();
																					
				
		System.out.println(distance);
		System.out.println(duration);
		
	}
}
