package au.com.pnspvtltd.mcd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import au.com.pnspvtltd.mcd.domain.MyCarDomainUser;

public interface MyCarDomainUserRepository extends JpaRepository<MyCarDomainUser, Long>{

}
