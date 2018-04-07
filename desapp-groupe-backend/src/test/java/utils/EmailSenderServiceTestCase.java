package utils;

import org.junit.Test;

public class EmailSenderServiceTestCase {

	@Test
	public void test() {
		EmailSenderService sender = new EmailSenderService();
		
		sender.sendEmail("Probando", "Hola","ignaciolamandia@gmail.com");
		sender.sendEmail("Probando", "Hola Ioia","ignacio.gioya@gmail.com");
	}

}
