package au.com.pnspvtltd.mcd.domain;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "features")
public class Photo {

	private long photoId;

	@Column(name = "PHOTONAME")
	private String photoName;
	@Column(name = "PHOTOTYPE")
	private String type;
	@Column(name = "SIZE")
	private int size;
	@Basic(fetch = FetchType.LAZY)
	@Lob
	@Column(name = "PIC")
	private byte[] picture;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PHOTOID")
	public long getPhotoId() {
		return photoId;
	}

	public void setPhotoId(long photoId) {
		this.photoId = photoId;
	}

	public String getPhotoName() {
		return photoName;
	}

	public void setPhotoName(String photoName) {
		this.photoName = photoName;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}
}
