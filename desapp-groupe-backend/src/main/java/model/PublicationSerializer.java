package model;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

public class PublicationSerializer extends StdSerializer<Publication>{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public PublicationSerializer() {
        this(null);
    }
   
    public PublicationSerializer(Class<Publication> t) {
        super(t);
    }
 
    @Override
    public void serialize(
    		Publication value, JsonGenerator jgen, SerializerProvider provider) 
      throws IOException, JsonProcessingException {
  
        jgen.writeStartObject();
        jgen.writeNumberField("id", value.id);
        jgen.writeStringField("retireAddress", value.getRetireAddress());
        jgen.writeStringField("returnAddress", value.getReturnAddress());
        jgen.writeObjectField("owner", value.getOwner());
        jgen.writeObjectField("vehicle", value.getVehicle());
        jgen.writeStringField("telephone", value.getTelephone());
        jgen.writeNumberField("costPerHour", value.getCostPerHour());
        jgen.writeEndObject();
    }
}
