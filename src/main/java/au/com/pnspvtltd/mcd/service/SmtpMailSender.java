package au.com.pnspvtltd.mcd.service;



import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.UnsupportedEncodingException;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.MessagingException;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;


@Component
public class SmtpMailSender {

	@Autowired
	private JavaMailSender mailSender;
	
	public void sendMail(String to,String subject,String text) throws MessagingException, UnsupportedEncodingException
	{
		MimeMessage message=mailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message,true);
		helper.setSubject(subject);
		helper.setTo(to);
		helper.setText(text);
		//String msg="<html><i>Dear Subscriber<br/><br/><b>Thank you for subscribing to Autoscoop updates!!!</b><br/><br/>We hope to delight you with our range of seamlessly integrated offerings for buying, selling, financing, Insurance and your services & maintenance needs and much more for your automobiles needs starting with managing your Cars! Get ready to transform your experience for all your automobile related needs.<br/><br/>Stay tuned for <b>more!</b><br/><br/>Regards<br/>Team Autoscoop</i></html> ";
		String msg="<html><i>Dear Subscriber<br/><br/><b>You are invited to register with Autoscoop!!!</b><br/><br/>We hope to delight you with our range of seamlessly integrated offerings for buying, selling, financing, Insurance and your services & maintenance needs and much more for your automobiles needs starting with managing your Cars! Get ready to transform your experience for all your automobile related needs.<br/><br/>Stay tuned for <b>more!</b><br/><br/>Regards<br/>Team Autoscoop</i></html> ";
		//String msg="<img src=\"src/main/java/au/com/pnspvtltd/mcd/service/AutoscoopImg.png\">";
		helper.setFrom(new InternetAddress("support@autoscoop.com.au", "support@autoscoop.com.au"));
		message.setDescription(msg,"text/html");
		message.setContent(msg,"text/html");
		mailSender.send(message);
		
		/*MimeMessage message=mailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message,true);
		helper.setSubject(subject);
		helper.setTo(to);
		helper.setText(text);
		helper.setFrom(new InternetAddress("support@autoscoop.com.au", "support@autoscoop.com.au"));   
		  // This mail has 2 part, the BODY and the embedded image
		         MimeMultipart multipart = new MimeMultipart("related");
		         // first part (the html)
		         BodyPart messageBodyPart = new MimeBodyPart();
		         //String htmlText = "<H1>Hello</H1><img src=\"cid:image\">";
		         String htmlText = "<img src=\"cid:image\">";
		         messageBodyPart.setContent(htmlText, "text/html");
		         // add it
		         multipart.addBodyPart(messageBodyPart);
		         // second part (the image)
		         messageBodyPart = new MimeBodyPart();
		         //DataSource fds = new FileDataSource("C:\\Users\\mk\\Desktop\\AutoscoopImg.png");
		         FileReader fs;
				try {
					fs = new FileReader("src/main/java/au/com/pnspvtltd/mcd/service/abc.txt");
					if(fs!=null){
			        	 System.out.println("fiel is open");
			         }
				} catch (FileNotFoundException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		         
		         DataSource fds = new FileDataSource("src\\main\\java\\au\\com\\pnspvtltd\\mcd\\service\\abc.txt");
		         //src/main/java/au.com.pnspvtltd.mcd.service  src/main/java/au/com/pnspvtltd/mcd/service/AutoscoopImg.png
		         //DataSource fds = new FileDataSource("localhost:8080\\MyCarDomain\\AutoscoopImg.png");
		         File f= new File(null);
		         DataSource fds1 = new FileDataSource(f);
		         messageBodyPart.setDataHandler(new DataHandler(fds));
		         messageBodyPart.setHeader("Content-ID", "<image>");
		         // add image to the multipart
		         multipart.addBodyPart(messageBodyPart);
		         // put everything together
		         message.setContent(multipart);
		         mailSender.send(message);*/
		   // Send the actual HTML message, as big as you like
		  //Transport.send(message);
		   System.out.println("Mail sent successfully!!!");
	}
	
}
