package au.com.pnspvtltd.mcd.domain;
import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Entity implementation class for Entity: Quoatation user History
 * 
 */
@Entity @Table(name = "userquotationhistory") public class UserQuotationHistory implements Serializable 
{


	/**
	 * 
	 */
	private static final long serialVersionUID = 2795828321233759004L;
	

	/**
	 * 
	 */
												
		

	
	private Long userQuotationHistoryId;
	 
	
	
	private String comment;
	private Date creationDate;
	
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name = "USERQUOTATIONHISTORYID")
	public Long getUserQuotationHistoryId() {
		return userQuotationHistoryId;
	}


	public void setUserQuotationHistoryId(Long userQuotationHistoryId) {
		this.userQuotationHistoryId = userQuotationHistoryId;
	}

	
	@Column(name = "COMMENT") 
	public String getComment() {
		return comment;
	}


	public void setComment(String comment) {
		this.comment = comment;
	}

	
	@Column(name = "CREATIONDATE") 
	public Date getCreationDate() {
		return creationDate;
	}


	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	
		
	
	
	


	
	
	
		
	/*end*/
	

	

	

	

	

	
		

	
	
	

	 	
	
}
