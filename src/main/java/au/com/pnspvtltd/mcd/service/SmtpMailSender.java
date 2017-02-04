package au.com.pnspvtltd.mcd.service;



import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;


@Component
public class SmtpMailSender {

	@Autowired
	private JavaMailSender mailSender;
	
	public void sendMail(String to,String subject,String text) throws MessagingException
	{
		MimeMessage message=mailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message,true);
		helper.setSubject(subject);
		helper.setTo(to);
		/*helper.setText(text);*/
		String msg="<html><i>Dear Subscriber<br/><br/><b>Thank you for subscribing to Autoscoop updates!!!</b><br/><br/>We hope to delight you with our range of seamlessly integrated offerings for buying, selling, financing, Insurance and your services & maintenance needs and much more for your automobiles needs starting with managing your Cars! Get ready to transform your experience for all your automobile related needs.<br/><br/>Stay tuned for <b>more!</b><br/><br/>Regards<br/>Team Autoscoop</i></html> ";
		
		/*message.setDescription(msg,"text/html");*/
		message.setContent(msg,"text/html");
		mailSender.send(message);
		
		
		
	}
	
}
