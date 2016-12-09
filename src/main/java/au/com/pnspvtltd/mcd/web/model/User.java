package au.com.pnspvtltd.mcd.web.model;

import com.google.common.base.Objects;

public class User {

	private Long userId;
	private String userABNNumber;
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getUserABNNumber() {
		return userABNNumber;
	}
	public void setUserABNNumber(String userABNNumber) {
		this.userABNNumber = userABNNumber;
	}
	
	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;

		User other = (User) o;

		return Objects.equal(userId, other.userId) && Objects.equal(userABNNumber, other.userABNNumber);
	}

	@Override
	public int hashCode() {
		return Objects.hashCode(userId, userABNNumber);
	}

	
	@Override
	public String toString() {
		return Objects.toStringHelper(getClass()).add("userId", userId).add("userABNNumber", userABNNumber)
												 .toString();
	}
	
}
