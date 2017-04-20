package au.com.pnspvtltd.mcd.web.model;

public class UserEBidTransServVO {

	private Long userId;

	private SearchTranspVO SearchTranspLead;

	

	public SearchTranspVO getSearchTranspLead() {
		return SearchTranspLead;
	}

	public void setSearchTranspLead(SearchTranspVO searchTranspLead) {
		SearchTranspLead = searchTranspLead;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	
	

}
