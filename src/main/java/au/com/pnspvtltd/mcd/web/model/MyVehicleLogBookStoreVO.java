package au.com.pnspvtltd.mcd.web.model;

public class MyVehicleLogBookStoreVO {

	private Long myVehicleId;

	private MyVehicleLogBookVO myVehicleLogBookVO;
	private MyVehicleFuelExpensesVO myVehicleFuelExpensesVO;
	private MyVehicleServMaintVO myVehicleServMaintVO;
	
	

	public MyVehicleFuelExpensesVO getMyVehicleFuelExpensesVO() {
		return myVehicleFuelExpensesVO;
	}

	public void setMyVehicleFuelExpensesVO(MyVehicleFuelExpensesVO myVehicleFuelExpensesVO) {
		this.myVehicleFuelExpensesVO = myVehicleFuelExpensesVO;
	}

	public MyVehicleServMaintVO getMyVehicleServMaintVO() {
		return myVehicleServMaintVO;
	}

	public void setMyVehicleServMaintVO(MyVehicleServMaintVO myVehicleServMaintVO) {
		this.myVehicleServMaintVO = myVehicleServMaintVO;
	}

	public Long getMyVehicleId() {
		return myVehicleId;
	}

	public void setMyVehicleId(Long myVehicleId) {
		this.myVehicleId = myVehicleId;
	}

	public MyVehicleLogBookVO getMyVehicleLogBookVO() {
		return myVehicleLogBookVO;
	}

	public void setMyVehicleLogBookVO(MyVehicleLogBookVO myVehicleLogBookVO) {
		this.myVehicleLogBookVO = myVehicleLogBookVO;
	}
	

	
}
