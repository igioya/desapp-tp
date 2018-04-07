package utils;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
 
public class EmailSenderService {
	
	private final Properties properties = new Properties();
	
	//private String password;
 
	private Session session;
 
	private void init() {
 
		properties.put("mail.smtp.host", "smtp.gmail.com");
		properties.put("mail.smtp.starttls.enable", "true");
		properties.put("mail.smtp.port",587);
		//properties.put("mail.smtp.mail.sender","desapp.unq.grupoe@gmail.com");
		properties.put("mail.smtp.user", "desapp.unq.grupoe@gmail.com");
		properties.put("mail.smtp.auth", "true");
 
		session = Session.getDefaultInstance(properties);
	}
	
	public void sendEmail(String subject, String text, String receiver){
		 
		init();
		try{
			MimeMessage message = new MimeMessage(session);
			message.setFrom(new InternetAddress("desapp.unq.grupoe@gmail.com"));
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(receiver));
			message.setSubject(subject);
			message.setText(text);
			Transport transport = session.getTransport("smtp");
			transport.connect("desapp.unq.grupoe@gmail.com", "aplicaciones");
			transport.sendMessage(message, message.getAllRecipients());
			transport.close();
		}catch (MessagingException me){
			me.printStackTrace();
		}
	}
}