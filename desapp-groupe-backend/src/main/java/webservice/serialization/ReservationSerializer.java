package webservice.serialization;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import model.Reservation;

public class ReservationSerializer extends StdSerializer<Reservation>{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ReservationSerializer() {
        this(null);
    }
   
    public ReservationSerializer(Class<Reservation> t) {
        super(t);
    }
 
    @Override
    public void serialize(
    		Reservation value, JsonGenerator jgen, SerializerProvider provider) 
      throws IOException, JsonProcessingException {
  
        jgen.writeStartObject();
        jgen.writeNumberField("id", value.id);
        jgen.writeObjectField("client", value.getClient());
        jgen.writeObjectField("fromDate", value.getFromDate());
        jgen.writeObjectField("toDate", value.getToDate());
        jgen.writeEndObject();
    }
}
