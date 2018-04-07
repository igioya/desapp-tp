package utils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

public class MailSender {
	private static MailSender mailsender = new MailSender();
	private JavaMailSender sender;
	private MailSender(){};
	
	public static MailSender getInstance( ) {
	      return mailsender;
	}
	
	public void sendMail(String subject, String content, String destinataryMail) throws MessagingException{
		MimeMessage msg = sender.createMimeMessage();
		MimeMessageHelper msgHelper= new MimeMessageHelper(msg,true);
	    msgHelper.setTo(destinataryMail);
	    msgHelper.setText(content);
	    msgHelper.setSubject(subject);
	    sender.send(msg);
		
	    
	}
	
     
    
    
    

}
