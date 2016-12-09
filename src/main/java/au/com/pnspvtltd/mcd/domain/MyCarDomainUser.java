package au.com.pnspvtltd.mcd.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class MyCarDomainUser {

	private Long id;
	private String ABNNumber;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="USERID")
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	@Column(name="ABNNUMBER")
	public String getABNNumber() {
		return ABNNumber;
	}
	public void setABNNumber(String aBNNumber) {
		ABNNumber = aBNNumber;
	}
	
	
}
