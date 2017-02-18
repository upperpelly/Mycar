package au.com.pnspvtltd.mcd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import au.com.pnspvtltd.mcd.domain.Dealer;
import au.com.pnspvtltd.mcd.domain.MyVehicle;

public interface MyVehicleRepository extends JpaRepository<MyVehicle, Long>{
	//MyVehicle findByEmailIgnoreCase(String emailId);
}
