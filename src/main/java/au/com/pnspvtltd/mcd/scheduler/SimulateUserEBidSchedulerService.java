package au.com.pnspvtltd.mcd.scheduler;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import au.com.pnspvtltd.mcd.domain.Search;
import au.com.pnspvtltd.mcd.enums.LeadInitiatedBy;
import au.com.pnspvtltd.mcd.repository.FinanceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.InsuranceQuotationRepository;
import au.com.pnspvtltd.mcd.repository.InventoryRepository;
import au.com.pnspvtltd.mcd.repository.UserRepository;
import au.com.pnspvtltd.mcd.repository.UserSearchLeadRepository;
import au.com.pnspvtltd.mcd.repository.VehicleQuotationRepository;
import au.com.pnspvtltd.mcd.service.impl.UserServiceImpl;
import au.com.pnspvtltd.mcd.util.DomainModelUtil;

@Service
public class SimulateUserEBidSchedulerService {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private UserSearchLeadRepository userSearchLeadRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private InventoryRepository inventoryRepository;
	@Autowired
	private VehicleQuotationRepository vehicleQuotationRepository;
	@Autowired
	private FinanceQuotationRepository financeQuotationRepository;
	@Autowired
	private InsuranceQuotationRepository insuranceQuotationRepository;
	@Autowired
	private DomainModelUtil domainModelUtil;

	//@Scheduled(fixedDelay=10800000)
	@Scheduled(fixedDelay=1000)
	@Transactional
	public void simulateUserEBid(){
		
		//Get Search Leads which are initiated by USER
		List<Search> searchLeads = userSearchLeadRepository.findByLeadInitiatedBy(LeadInitiatedBy.USER);
		
		//dsfsddfdsds
		
	}
}
