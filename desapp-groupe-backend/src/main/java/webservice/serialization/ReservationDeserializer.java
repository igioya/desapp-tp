package webservice.serialization;

import java.io.IOException;

import org.joda.time.LocalDateTime;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import model.Reservation;
import model.User;

public class ReservationDeserializer extends StdDeserializer<Reservation>{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ReservationDeserializer() { 
        this(null); 
    } 
 
    public ReservationDeserializer(Class<?> vc) { 
        super(vc); 
    }
 
    @Override
    public Reservation deserialize(JsonParser jp, DeserializationContext ctxt) 
      throws IOException, JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
    	JsonNode node = jp.getCodec().readTree(jp);
        String fromDate = node.get("fromDate").asText();
        String toDate = node.get("toDate").asText();
        User user = objectMapper.treeToValue(node.get("client"), User.class);
 
        return new Reservation(user, new LocalDateTime(fromDate), new LocalDateTime(toDate));
    }
}
