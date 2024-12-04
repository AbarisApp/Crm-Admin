import { Navigate, Route, Routes, useParams } from "react-router-dom";

import "./assets/css/style.css";
import "./components/upgrade-member/member.css"
import "react-toastify/dist/ReactToastify.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./assets/css/style.css";
import "./common/CustomInputField/index.module.scss";
import "./assets/css/project.css"

import DasBoardRight from "./pages/dasBoardRight/DasBoardRight";
import DistributerPage from "./pages/distributer";
import CreateUserDistributerPage from "./pages/distributer/createUserDistributer/CreateUserDistributer";
import SuspendedUserPage from "./pages/suspendedUsers";
import NotWorkingUserPage from "./pages/notWorkingUser";
import PendingTransactionReport from "./components/reportMaster/pendingTransactionReport/PendingTransactionReport";
import OperatorWiseSalePage from "./pages/operatorWiseSale";
import BalanceTransferPage from "./pages/balanceTransfer";
import SolveDisputePage from "./pages/solveDispute";
import RetailerIncomePage from "./pages/retailerIncome";
import MyIncomePage from "./pages/myIncome";
import MasterPages from "./pages/topNavigationPages/Master";
import CompanyStaffPages from "./pages/topNavigationPages/companyStaff/CompanyStaffPages";
import BoardcastPage from "./pages/boardcast";
import BankMasterP from "./pages/topNavigationPages/Master/bankMaster";
import Provider from "./components/topNavigationComp/apimaster/provider/Provider";
import AddproviderLogo from "./components/topNavigationComp/apimaster/provider/providerForm/addproviderLogo/AddproviderLogo";
import AddBank from "./components/topNavigationComp/masters/bankMaster/addBank/AddBank";
import RoleMasterPage from "./pages/topNavigationPages/Master/roleMaster";
import StatusMasterPage from "./pages/topNavigationPages/Master/statusMaster";
import ServiceMasterPage from "./pages/topNavigationPages/Master/serviceMaster";
import AddRoleMaster from "./components/topNavigationComp/masters/roleMaster/addRoleMaster/AddRoleMaster";
import AddStatusMaster from "./components/topNavigationComp/masters/statusMaster/addStatusMaster/AddStatusMaster";
import AddServiceMaster from "./components/topNavigationComp/masters/serviceMaster/addServiceMaster/AddServiceMaster";
import PaymentMethodMasterPage from "./pages/topNavigationPages/Master/paymentMethodMaster";
import AddPaymentMethod from "./components/topNavigationComp/masters/paymentMethodMaster/addPaymentMethod/AddPaymentMethod";
import PayoutBeneficiaryMasterPage from "./pages/topNavigationPages/payoutBenefisiaryMaster";
import AddPayoutBeneficiaryMaster from "./components/topNavigationComp/masters/PayoutBeneficiaryMaster/addPayoutBeneficiaryMaster/AddPayoutBeneficiaryMaster";
import ServiceCategoryMasterPage from "./pages/topNavigationPages/Master/serviceCategoryMaster";
import AddServiceCategoryMaster from "./components/topNavigationComp/masters/serviceCategoryMaster/addServiceCategoryMaster/AddServiceCategoryMaster";
import AreaPage from "./pages/topNavigationPages/ZoneModule/area";
import AddArea from "./components/topNavigationComp/ZoneModule/area/addArea/AddArea";
import AgentOnbordingPage from "./pages/topNavigationPages/agentOnbording/index";
import AddAgentOnbording from "./components/topNavigationComp/masters/agentOnbording/addAgentOnbording/AddAgentOnbording";
import BalanceTransferAdd from "./components/balanceTransfer/blanceTrnsferAdd/BlanceTransferAdd";
import UpdateBlanceTransfer from "./components/balanceTransfer/UpdateBlanceTransfer/UpdateBlanceTransfer";
import UpdatePendingDisput from "./components/pendingDisput/updatePendingDisput/UpdatePendingDisput";
import AddSolveDispute from "./components/solveDispute/addSolveDispute/AddSolveDispute";
import UpdateSolveDispute from "./components/solveDispute/updateSolveDispute/UpdateSolveDispute";
import AddTransactionReport from "./components/reportMaster/alltransationsReports/addTransactionReport/AddTransactionReport";
import AddPendingTransactionReport from "./components/reportMaster/pendingTransactionReport/addPendingTarnsactionReport/AddPendingTransactionReport";
import AddNotWorkingUserList from "./components/notWorkingUser/addNotWorkingUserList/AddNotWorkingUserList";
import AddSuspendedUser from "./components/suspendedUsers/add SuspendedUser/AddSuspendedUser";
import AddOperatorWiseReport from "./components/reportMaster/operatorWiseSale/addOperatorWiseReports/AddOperatorWiseReport";
import AddDebitReport from "./components/reportMaster/debitReport/addDebitReport/AddDebitReport";
import AddCreditReport from "./components/reportMaster/creditReport/addCreditReport/AddCreditReport";
import AddProvider from "./components/topNavigationComp/apimaster/provider/addProvider/AddProvider";
import UpdateProvider from "./components/topNavigationComp/apimaster/provider/updateProvider/UpdateProvider";
import ApiMasterPage from "./pages/topNavigationPages/apisMaster/apiMaster";
import AddApiMaster from "./components/topNavigationComp/apimaster/appiMaster/addApiMaster/AddApiMaster";
import DominationWiseMasterPage from "./pages/topNavigationPages/apisMaster/dominationWiseMaster";
import AddDominationWiseMaster from "./components/topNavigationComp/apimaster/dominationWiseMaster/addDominationWiseMaster/AddDominationWiseMaster";
import UpdateDonimationWiseMaster from "./components/topNavigationComp/apimaster/dominationWiseMaster/updateDominationWiseMaster/UpdateDominationWiseMaster";
import NumberSeriesMasterPage from "./pages/topNavigationPages/apisMaster/numberSeriesMaster";
import AddNumberSeriesMaster from "./components/topNavigationComp/apimaster/numberSeriesMaster/addNumberSeriesMaster/AddNumberSeriesMaster";
import UpdateNumberSeriesMaster from "./components/topNavigationComp/apimaster/numberSeriesMaster/updateNumberSeriesMaster/UpdateNumberSeriesMaster";
import StateWiseApiPage from "./pages/topNavigationPages/apisMaster/stateWiseApi";
import StateWiseProviderSetting from "./components/topNavigationComp/apimaster/stateWiseApi/stateWiseProviderSettings/StateWiseProviderSetting";
import BackupApiMasterPage from "./pages/topNavigationPages/apisMaster/backupApiMaster";
import AddBackupApiMaster from "./components/topNavigationComp/apimaster/backupApiMaster/addBackupApiMaster/AddBackupApiMaster";
import UpdateBackupApiMaster from "./components/topNavigationComp/apimaster/backupApiMaster/updateBackupApiMaster/UpdateBackupApiMaster";
import ApiSwitchingPage from "./pages/topNavigationPages/apisMaster/apiSwitch";
import UserOperatorLimitPage from "./pages/topNavigationPages/apisMaster/userOperatorLimit";
import ViewOperatorLimit from "./components/topNavigationComp/apimaster/userOperatorLimit/viewOperatorLimit/ViewOperatorLimit";
import ApiVandorPaymentPage from "./pages/topNavigationPages/apisMaster/apiVandorPayment";
import SiteSettingPage from "./pages/topNavigationPages/settings/siteSetting";
import SmsSettingsPage from "./pages/topNavigationPages/settings/smsSetting";
import PackageSettingsPage from "./pages/topNavigationPages/settings/packageSettings";
import CommissionSetup from "./components/topNavigationComp/settings/packageSettings/commissionSetup/CommissionSetup";
import SetOperatorSettings from "./components/topNavigationComp/settings/packageSettings/commissionSetup/setOperatorSettings/SetOperatorsettings";
import BankSettingsPage from "./pages/topNavigationPages/settings/bankSettings";
import AddBankSettings from "./components/topNavigationComp/settings/bankSettings/addBankSetting/AddBankSettings";
import UpdateBankSettings from "./components/topNavigationComp/settings/bankSettings/updateBankSettings/UpdateBanksettings";
import AddDistributerInc from "./components/distributerIncome/distributerIncomeForm/addDistributerInc/AddDistributerInc";
import AddRetailerInc from "./components/retailerIncome/addRetailerInc/AddRetailerInc";
import ContactInquery from "./pages/topNavigationPages/Master/contactInquery/index";
import AddContactEnquiry from "./components/topNavigationComp/masters/contactEnquiry/addContactEnquiry/AddContactEnquiry";
import AddCompanyStaff from "./components/topNavigationComp/companyStaff/addCompanyStaff/AddCompanyStaff";
import CashfreeGateWayMasterPages from "./pages/topNavigationPages/Master/cashfreeGateWayMasterPages";
import AddCashFreeGateway from "./components/topNavigationComp/masters/cashfreeGatewayMaster/addCashFreeGateway/AddCashFreeGateway";
import SendRoleWisepage from "./pages/topNavigationPages/whatsAppPages";
import CompanySettings from "./components/topNavigationComp/settings/companySetting/CompanySettings";
import LogoUploadPage from "./pages/topNavigationPages/settings/logoUpload";
import SignatureUploadPage from "./pages/topNavigationPages/settings/signatureUpload";
import ServiceBannerPage from "./pages/topNavigationPages/settings/serviceBanner";
import NotificationSettingsPage from "./pages/topNavigationPages/settings/notificationSettings";
import DynemicPage from "./pages/topNavigationPages/websiteMaster/dynemicPage";
import FrontBannerPage from "./pages/topNavigationPages/websiteMaster/frontBanner";
import UserPannelSliderPage from "./pages/topNavigationPages/websiteMaster/userPannelSlider";
import LoginPage from "./pages/login";
import CurrencyPage from "./pages/currency";
import CurrencyForm from "./components/currency/CurrencyForm";
import CountryPage from "./pages/country";
import CountryForm from "./components/country/countryForm/CountryForm";
import LanguagePage from "./pages/language";
import FormLanguage from "./components/language/formLanguage.js/FormLanguage";
import CountryZoneMudle from "./components/topNavigationComp/ZoneModule/country/Country";
import StaffPage from "./pages/staffModule/staff";
import StaffForm from "./components/staffModule/staffForm/StaffForm";
import StaffTypePage from "./pages/staffModule/staffType";
import StaffTypeAdd from "./components/staffModule/staffType/staffTypeAdd/StaffTypeAdd";
import Customer from "./components/topNavigationComp/customer/Customer";
import AddUsers from "./components/topNavigationComp/customer/users/addUsers/AddUsers";
import IndexZone from "./components/topNavigationComp/ZoneModule/country/zoneCountryAdd/IndexZone";
import UsersType from "./pages/topNavigationPages/userType";
import AddUsertType from "./components/topNavigationComp/customer/addUserType/AddUsertType";
import StateMasterPage from "./pages/stateMaster";
import FormStateMaster from "./components/stateMaster/formStateMaster/FormStateMaster";
import Profile from "./common/profileUser/Profile";
import ServiceAreaPermissionPage from "./pages/servicePermission/serviceAreaPermission/index";
import FormServicePermission from "./components/servicePermission/formServiceAreaPermission/FormServiceAreaPermission";
import ApiTransitionMasterPage from "./pages/topNavigationPages/apisMaster/apiTransitionMaster";
import PrivateRoute from "./privateRote/PrivateRoute";
import { useSelector } from "react-redux";
import { getToken2 } from "./utils/localStorage";
import { useDispatch } from "react-redux";
import { setIsLogin } from "./slice/auth";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ZoonArea from "./pages/zoonArea";
import Statement from "./pages/statement/page";
import StatementWallet from "./pages/walletstatement/page";
import Transactions from "./pages/transactions";
import ViewProfileMemberPage from "./pages/viewProfileMember";
import UtiPancardPage from "./pages/utiPandcard";
import ChangePinPage from "./pages/changePinPage";
import ChangePasswordPage from "./pages/changePassword";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import LoginPasswordReset from "./pages/paswordResetPages";
import ChargesSettingsPage from "./pages/chargeSettings/index";
import TicketForm from "./components/ticketMaster/addTicket/TicketForm";
import DepartmentMasterPage from "./pages/topNavigationPages/Master/department";
import AddDepartmentMaster from "./components/topNavigationComp/masters/roleMaster/addDepartment/AddRoleMaster";
import PackageMasterPage from "./pages/packagemaster";
import AddPackegs from "./pages/packagemaster/addPackegs/AddPackegs";
import PackageSaleReplort from "./pages/Package-Sales-Report";
import EditPackegs from "./pages/packagemaster/addPackegs/EditPackege";
import AddPermision from "./components/rolesPermision/addStaffPermision/AddPermision";
import ListStaffPermision from "./components/rolesPermision/listStaffPermision/ListStaffPermision";
import BuildingMaster from "./components/permisionMaster/buildingPer/BuildingMaster";
import BlockMaster from "./components/permisionMaster/blockpermission/BlockMaster";
import AreaPermision from "./components/permisionMaster/areaPerMaster/AreaPermision";
import FloorPermission from "./components/permisionMaster/floorMaster/floorPermission/FloorPermission";
import WardMaster from "./components/permisionMaster/wardMaster/WardMaster";
import OfficeMaster from "./components/permisionMaster/officeMaster/OfficeMaster";
import DepartmentMaster from "./components/permisionMaster/departmentMaster/DepartmentMaster";
import DesignationMaster from "./components/permisionMaster/designationMaster/DesignationMaster";
// --------------------------mustafa import routes----------------

import AddMainModulePage from "./pages/RolePermission/addMainModule/AddMainModule";
import MainListModule from "./pages/RolePermission/addMainModule/mailListModule/MailLisyModule";
import AddSubModule from "./pages/RolePermission/subModule/addSubModule/AddSubModule";
import MainSubListModule from "./pages/RolePermission/subModule/mailSubListModule/MainSubListModule";
import AddRole from "./pages/RolePermission/addRole/AddRole";
import ListMainRole from "./pages/RolePermission/addRole/listmainRole/ListMainRole";
import ComplaintsDashboardPages from "./pages/complaintsDashboardPages";
import AddCompalnePage from "./pages/createCompalne/addCompalne/AddComplane";
import MainListComplane from "./components/createCompalne/listComplane/MainListCompalne";
import StaffKycMaster from "./components/staffKycMaster/StaffKycMaster";
import StaffKycMasterByid from "./components/staffKycMaster/StaffKycMaster";
import StaffKycDetailsMasterByid from "./components/staffKycDetailsByStaffId/StaffKyDetailsMasterByid";
import { NotificationReport } from "./pages/Notification-Report/indexSame";
import { getToken } from 'firebase/messaging';
import { messaging } from "./firebase/fireBase";
import { getMenusdata, sendNotification } from "./api/login/Login";
import SetGroupAttributesPages from "./pages/setGroupAttributes";
import Cities from "./pages/city";
import CityForm from "./components/city/addCityForm/CityForm";
import PageNotFound from "./common/pageNotFound/PageNotFound";
//---------------------end--------------------------
//---------------------After Delete start--------------------------
import DmtDisputesPage from "./pages/dmt/disputes";
import DmtStatusPage from "./pages/dmt/dmtStatus/DmtStatus";
import PriorityPages from "./pages/dmt/priorityPages";
import CollegetypesPage from "./pages/collegeTypes";
import CollegetypeForm from "./components/topNavigationComp/masters/collegeType/collegeTypesForm/CollegetypeForm";
import LeadStatusMaster from "./pages/LeadStatusMaster";
import LeadStatusForm from "./components/topNavigationComp/masters/leadStatusMaster/leadStatusForm/LeadStatusForm";
import LeadSubStatusMaster from "./pages/leadSubStatusMaster";
import LeadSubStatusForm from "./components/topNavigationComp/masters/leadSubStatusMaster/leadSubStatusForm/LeadSubStatusForm";
import LeadSourceMasterPage from "./pages/LeadSourceMasterpage";
import LeadSourceMasterForm from "./components/topNavigationComp/masters/leadSourceMaster/leadSourceMasterForm/LeadSourceMasterForm";
import AffilatedBy from "./pages/affilatedBy";
import AffilatedTypesForm from "./components/topNavigationComp/masters/affilatedType/affilatedTypeForm/AffilatedTypesForm";
import CreditCard from "./pages/creditCard";
import CreditCardMasterForm from "./components/topNavigationComp/masters/creditCardMaster/creditCardMasterForm/CreditCardMasterForm";
import ApprovalMasterForm from "./components/topNavigationComp/masters/approvalMaster/approvalMasterForm/ApprovalMasterForm";
import ApprovalMaster from "./pages/approvalMaster/ApprovalMaster";
import CollagesData from "./pages/collegesDatas";
import CollagesFormData from "./components/collegesData/collagesFormData/ColllagesFormData";
import PriorityMasterForm from "./components/dmtModule/priorityMaster/priorityMasterForm/PriorityMasterForm";
import DmtStatusForm from "./components/dmtModule/status/dmtStatusForm/DmtStatusForm";
import Facilities from "./pages/facilities";
import FacilitiesMasterForm from "./components/topNavigationComp/masters/facilitiesMaster/facilitiesMasterForm/FacilitiesMasterForm";
import GalleryDatas from "./pages/Gallery";
import PhotoGalleryMasterForm from "./components/topNavigationComp/masters/photosGalleryMaster/photosGalleryForm/PhotoGalleryMasterForm";
import MoveMember from "./pages/move-member";
import UpgradeMember from "./pages/upgrade-member";
//---------------------end--------------------------

//---------------------JUNAID IMPORT START--------------------------
import CreateTestimonial from "./components/testimonial/CreateTestimonial";
import Testimoniallist from "./components/testimonialList/Testimoniallist";
import CreateVedio from "./components/vedioadd/CreateVedio";
import VedioList from "./components/vediolist/VedioList";
import BlogCategoryList from "./components/blog-categoryList/BlogCategoryList";
import BLogCategoryAdd from "./components/blog-categoryAdd/BLogCategoryAdd";
import BlogList from "./components/blogList/BlogList";
import BLogAdd from "./components/blog/BLogAdd";
import PartnerList from "./components/partnerList/PartnerList";
import PartnerAdd from "./components/partneradd/PartnerAdd";
import AboutUs from "./components/aboutus/AboutUs";
import ContactUs from "./components/contact/AboutUs";
import PrivacyAndPolicy from "./components/privecyPolecy/PrivacyAndPolicy";
import ReturnPolicy from "./components/return-policy/Return-Policy";
import TermsCondition from "./components/terms-condition/TermsCondition";
import FAQAdd from "./components/FaqAdd/FAQAdd";
import FaqList from "./components/FaqList/FaqList";
import WhatsaapMaster from "./components/whatsaap-master/WhatsaapMaster";
import WhatsAppManager from "./components/WhatsAppManager/WhatsAppManager";
import { ListUtility } from "./components/WhatsAppManager/ListUtility";
import NewTemplateForm from "./components/NewTemplateForm.js/NewTemplateForm";
import TableTemplate from "./components/template-typeList/TemplateTypeList";
import TemplateTypeAdd from "./components/template-typeAdd/TemplateTypeAdd";
import TemplateCategoryList from "./components/TemplateCategoryList/TemplateCategoryList";
import TemplateCategoryAdd from "./components/TemplateCategoryAdd/TemplateCategoryAdd";
import FlowBuilder from "./components/flow-builderList/FlowBuildList";
import FlowBuilderAdd from "./components/flow-builderAdd/FlowBuilderAdd";
import LeadDetail from "./pages/lead-detail/LeadDetail";
import Coursedegree from "./pages/topNavigationPages/Master/courseTypesdegree";
import CourceDegreeTypeForm from "./components/topNavigationComp/masters/courseDegreeType/courseDegreeTypeForm/CourceDegreeTypeForm";
import ListnumberWhatsaap from "./components/whatsApp/addNumberWhatsapp/listNumberWhatsapp/ListNumberWhatsApp";
import AddNumber from "./components/whatsApp/addNumberWhatsapp/addNumber/AddNumber";
import AgentList from "./components/whatsApp/agent/agentList/AgentList";
import SharedTeamWhatsapp from "./components/whatsApp/sharedTeamInbox/SharedTeamWhatsapp";
import CreateAgent from "./components/whatsApp/agent/createAgent/CreateAgent";
import EmailSettings from "./pages/emailSetings";
import CreateCampingMessages from "./components/messagesApps/CreateCamping/CreateCamping";
import UtilityManager from "./components/messagesApps/utilityManager/UtilityManager";
import ManageReports from "./components/messagesApps/manageReports/ManageReports";
import CreateLead from "./pages/create-lead/Index";
import CreateCall from "./pages/createcall/Index";
import CallList from "./pages/List-Call/Index";
import CreateEnquiry from "./pages/Create-Enquiry/Index";
import EnquiryList from "./pages/List-Enquiry/Index";
import LeadTypeList from "./components/LeadType/LeadTypeList";
import LeadTypeAdd from "./components/leadtypead/LeadTypeAdd";
import CallStatusMasters from "./components/topNavigationComp/masters/callstatus/CallStatusMasters";
import CreateCallForm from "./components/topNavigationComp/masters/callstatus/MasterForm/CreateCallForm";
import ConvertStatus from "./components/topNavigationComp/masters/convert-status/ConvertStatus";
import CreateConvertForm from "./components/topNavigationComp/masters/convert-status/MasterForm/CreateConvertForm";
import ConvertCallSource from "./components/topNavigationComp/masters/convert-call-source/ConvertCallSource";
import CreateConvertCallForm from "./components/topNavigationComp/masters/convert-call-source/MasterForm/CreateConvertCallForm";
import CattleList from "./components/cattle/CattleList";
import CattleAdd from "./components/cattle/CattleAdd";
import CattleVareiant from "./components/cattle/cattleVariant/CattleVariant";
import LiveStockVarriant from "./components/cattle/liveStockVarriant/LiveStockVarriant";
import BuyList from "./components/buy/buyList/BuyList";
import Addnewpurchase from "./components/buy/newPurchase/Addnewpurchase";
import AssignToShed from "./components/buy/assignToShed/AssignToShed";
import ContestMaster from "./components/topNavigationComp/masters/contest/ContestMaster";
import Createcontest from "./components/topNavigationComp/masters/contest/MasterForm/CreateContext";
import BannerMaster from "./components/topNavigationComp/masters/banner/BannerMaster";
import ContestTypeMaster from "./components/topNavigationComp/masters/contest-type/ContestTypeMaster";
import CreateType from "./components/topNavigationComp/masters/contest-type/MasterForm/CreateType";
import MarketTypeMaster from "./components/topNavigationComp/masters/market-type/MarketTypeMaster";
import CreateTypemarket from "./components/topNavigationComp/masters/market-type/MasterForm/CreateType";
import CreateContext from "./components/topNavigationComp/masters/contest/MasterForm/CreateContext";
import CreateBanner from "./components/topNavigationComp/masters/banner/MasterForm/CreateBanner";
import PriceDistPage from "./components/topNavigationComp/masters/priceDistibuter/PriceDistPage";
import CreateadDistribution from "./components/topNavigationComp/masters/priceDistibuter/MasterForm/CreateadDistribution";
import PipeLinePage from "./components/topNavigationComp/masters/pipeline/PipeLinePage";
import AddPipeline from "./components/topNavigationComp/masters/pipeline/MasterForm/AddPipeline";
import DyenmicContest from "./components/topNavigationComp/masters/dynemiccontest/DyenmicContest";
import SeoConfigration from "./pages/systemsetting/Seoconfig/SeoConfigration";
import ManagementPages from "./pages/systemsetting/managePages/ManagementPages";
import SocialLoginCredentials from "./pages/systemsetting/sociallogin/SocialLoginCredentials";
import CornJobs from "./pages/systemsetting/cornjobs/CornJobs";
import CornScheduel from "./pages/systemsetting/cornSchedules/CornScheduel";
import DealMaster from "./components/topNavigationComp/masters/dealmaster/DealMaster";
import CreateDeal from "./components/topNavigationComp/masters/dealmaster/MasterForm/CreateDeal";
import SendEmail from "./components/emailSetings/sendEmail/SendEmail";
import EmailTemplet from "./components/emailSetings/emailTemplet/EmailTemplet";
import MailSeting from "./components/emailSetings/mailSetting/MailSettings";
import SiteMap from "./components/maped/siteMap/SiteMap";
import HomePageCategories from "./components/homePageCategories/HomePageCategories";
import Miscellaneous from "./components/miscellaneous/Miscellaneous";
import ManageAddons from "./components/addons/manageAddons/ManageAddons";
import ShopAddons from "./components/addons/shopAddons/ShopAddons";
import CronJobViewer from "./components/jobViewer/CronJobViewer";
import ErrorLogViewer from "./components/errorLogViewer/ErrorLogViewer";
import PhpViewer from "./components/phpViewer/PhpViewer";
import DataBaseBackup from "./components/dataBase/databaseBackUp/DatabaseBackup";
import SystemSettings from "./components/systemSettings/SystemSetings";
import PaymentGateway from "./components/systemSettings/innerCardsPages/paymentGatway/PaymentGateway";
import GeneralSettings from "./components/systemSettings/innerCardsPages/generalSettings/GeneralSettings";
import SystemConfiguration from "./components/systemSettings/innerCardsPages/systemConfigration/SystemConfigration";
import DeclaredWinnersPage from "./pages/declaredWinners";
import ManageUsersPage from "./pages/ManageUsers";
import UserDetails from "./components/ManageUsers/userDetails/UserDetails";
import PaymentsPage from "./pages/payments";
import { PaymentsDetails } from "./components/payments/PaymentsDetails";
import TransactionHistoryPage from "./pages/reports/transactionHistory";
import LoginHistoryPage from "./pages/reports/loginHistory";
import NotificationHistoryPage from "./pages/reports/notificationHistory";
import OptinManageMent from "./components/optinMangement/OptinManageMent";
import WaBlockNumber from "./components/waBlockNumber/WaBlockNumber";
import WhatsAppReports from "./components/whatsAppReports/WhatsAppReports";
import CompanyMasters from "./pages/companyMasters";
import CompanyFormMaster from "./components/topNavigationComp/masters/companyMaster/companyFormMaster/CompanyFormMaster";
import CompanyTypeMasters from "./pages/companyTypeMaster";
import CompanyTypeMasterForm from "./components/topNavigationComp/masters/companyTypeMaster/companyTypeMasterForm/CompanyTypeMasterForm";

import NotificationSettings from "./components/systemSettings/innerCardsPages/notificationSettings/NotificationSettings";
import ContestParticipate from "./components/contest_participate/ContestParticipate";
import CompanyDetail from "./components/companydetail/CompanyDeatail";



// -----------------goatx import -----------------

import FlightRequestPages from "./pages/flightAllPages";
import FlightAmbd from "./components/flightComp/flightAmbd/FlightAmbd";
import FlightCancel from "./components/flightComp/flightCancel/FlightCancel";
import FlightRefunds from "./components/flightComp/flightRefundlList/FlightRefunds";
import FlightBookingCalender from "./components/flightComp/flightBCalender/flightBookingCalender/FlightBookingCalender";
import HoteltAmbd from "./components/hotelComp/hotelAmbd/HotelAmbd";
import HotelBooking from "./components/hotelComp/hotelBooking/HotelBooking";
import HotelBCalender from "./components/hotelComp/hotelBCalender/HotelBCalender";
import HotelCancel from "./components/hotelComp/HotelCancel/HotelCancel";
import HotelRefunds from "./components/hotelComp/HotelRefundlList/HotelRefunds";
import BusMarkup from "./components/busComp/busMarkup/BusMarkup";
import BusAmendments from "./components/busComp/busAmendment/BusAmendments ";
import BusBooking from "./components/busComp/busBooking/BusBooking";
import BusCancel from "./components/busComp/busCancel/BusCancel";
import BusRefunds from "./components/busComp/BusRefund/BusRefund";
import BusGroupRequest from "./components/busComp/busGroupRequest/BusGroupRequest";
import BusDiscount from "./components/busComp/busDiscount/BusDiscount";
import BusUpload from "./components/busComp/busUpload/BusUpload";
import VisaMarkup from "./components/visaComp/visaMarkup/Visamarkup";
import VisaDiscount from "./components/visaComp/VisaDiscount/VisaDiscount";
import VisaList from "./components/visaComp/VisaList/Visalist";
import VisaAmendmentsList from "./components/visaComp/VisaAmendmentsList/VisaAmendmentslist";
import VisaBooking from "./components/visaComp/visaBooking/visaBooking";
import VisaSetings from "./components/visaComp/visaSettings/VisaSetings";
import AccountManagement from "./components/accountmanagment/AccountManagement";
import DistributorRequest from "./components/distributorDepositeRequest/DistributorRequest";
import RemarkPayment from "./components/flightComp/flightRequest/flightRequestList/RemarkPayment";
import ViewInvoice from "./components/flightComp/viewInvoice/ViewInvoice";
import VisaGroupReq from "./components/visaComp/visaGroupReq/VisaGroupReq";
import VisaRList from "./components/visaComp/VisaRList/VisaRlist";
import VisaRForm from "./components/visaComp/VisaRList/visaRForm/VisaRForm";
import FlightGroupRequest from "./components/flightComp/flightGroupRequest/FlightGroupRequest";
import FlightOfline from "./components/flightComp/flightOfline/FlightOfline";
import FlightMarkUp from "./components/flightComp/flightMarkup/FlightMarkUp";
import BalanceLedger from "./components/balance-ledger/BalanceLedger";
import VenderLogs from "./components/VenderLogs/VenderLogs";
import ApiManage from "./components/apiManagment/ApiManage";
// import ApiOffOnManage from "./components/api-manage/ApiOffOnManage";
import { ViaggiooDashboardPage } from "./pages/viaggiooDashBoard";
import FlightDiscount from "./components/flightComp/flightDiscount/FlightDiscount";
import FlightUploadTicket from "./components/flightComp/flightUploadTicket/FlightUploadTicket";
import HotelHoldQues from "./components/hotelComp/hotelHoldQues/HotelHoldQues";
import HotelMarkup from "./components/hotelComp/hotelMarkup/HotelMarkUp";
import HotelDiscount from "./components/hotelComp/hotelDiscount/HotelDiscount";
import HotelGroupRequest from "./components/hotelComp/HotelGroupRequest/HotelGroupRequest";
import HolidayMarkup from "./components/Holiday-markup/HolidayMarkup";
import HolidayDIscount from "./components/Holiday-discount/HolidayDIscount";
import HolidayListPage from "./components/Holiday-list/HolidayListPage";
import AddHoliday from "./components/Holiday-list/AddHoliday";
import HotelCoupon from "./components/hotelComp/hotelCoupon/HotelCoupon";
import HotelVocherUpload from "./components/hotelComp/hotelVocherUpload/HotelVocherUpload";
import Extension from "./components/systemSettings/Extention/Extension";
import CreatePages from "./pages/createPage/CreatePages";
import CreateLink from "./pages/createLink/CreateLink";
import CreatePageList from "./pages/createPage/list/HolidayListPage";
import CollegeBazzarDashboard from "./pages/collageBazzarsDashboad/CollegeBazzarDashboard";
import DashboardLeadPage from "./pages/Dashboard-Lead/Index";

import CollectMilkPage from "./pages/milkParlor/collectMilk";
import { CollectMilkAdd } from "./components/milkParlor/collectMilk/collectMilkAdd/CollectMilkAdd";
import SaleMilkPage from "./pages/milkParlor/saleMilk";
import { AddSaleMilk } from "./components/milkParlor/saleMilk/addSaleMilk/AddSaleMilk";
import { SaleMilkInvoice } from "./components/milkParlor/saleMilk/saleMilkInvoice/SaleMilkInvoice";
import SaleDueCollectionPage from "./pages/milkParlor/saleDueCollection";
import RoutineMonitorPage from "./pages/cowMonitor/routineMonitor";
import { AddRoutineMonitor } from "./components/cowMonitor/routineMonitor/addRoutineMonitor/AddRoutineMonitor";

import OverallReportPage from "./pages/Analytics/OverallReport";
import VisitorsLogPage from "./pages/Analytics/VisitorsLog";
import RecentHistoryPage from "./pages/Analytics/RecentHistory";
import OverviewPage from "./pages/Analytics/Overview";
import WhoOnlinePage from "./pages/Analytics/WhoOnline";
import PlayNif50Page from "./pages/playNif50";
import { Nifty50HourlyContest } from "./components/playNif50/Nifty50/nifty50Slide/nifty50HourlyContest/Nifty50HourlyContest";
import { SelectPlayers } from "./components/playNif50/Nifty50/nifty50Slide/nifty50HourlyContest/selectPlayers/SelectPlayers";
import { SelectStock } from "./components/playNif50/Nifty50/nifty50Slide/nifty50HourlyContest/selectPlayers/selectStock/SelectStock";
import GDPRCookies from "./components/systemSettings/gdpr/GDPRCookies";
import CustomCss from "./components/systemSettings/customcss/CustomCss";
import SiteMapXml from "./components/systemSettings/sitemap-XML/SiteMapXml";
import RobotsTxt from "./components/systemSettings/robots-txt/RobotsTxt";
import VaccineMonitorPage from "./pages/cowMonitor/vaccineMonitor";
import { AddVaccineMonitor } from "./components/cowMonitor/vaccineMonitor/addVaccineMonitor/AddVaccineMonitor";
import AnimalPregnancyPage from "./pages/cowMonitor/animalPregnancy";
import SaleListPage from "./pages/cowSale/saleList";
import CowSaleAdd from "./components/cowSale/saleList/cowSaleAdd/CowSaleAdd";
import { SaleInvoice } from "./components/cowSale/saleList/saleInvoice/SaleInvoice";
import SaleDueCollectionnPage from "./pages/cowSale/saleDueCollection";
import ExpenseListPage from "./pages/farmExpense/expenseList";
import { ExpenseListAdd } from "./components/farmExpense/expenseList/expenseListAdd/ExpenseListAdd";
import PolicyPages from "./components/systemSettings/innerCardsPages/policyPages/PolicyPages";
import Seoconfigration from "./components/systemSettings/innerCardsPages/policyPages/seoconfigrations/Seoconfigration";
import CowFeedPage from "./components/topNavigationComp/masters/cowfeed/CowFeedPage";
import CowFeedAdd from "./components/topNavigationComp/masters/cowfeed/MasterForm/CowFeedAdd";
import ManageCowPage from "./components/topNavigationComp/masters/manage-cow/ManageCowPage";
import ManageFeed from "./components/topNavigationComp/masters/manage-cow/MasterForm/ManageFeed";
import { HistoryTracking } from "./components/historyTracking/HistoryTracking";
import BookingRepoert from "./components/bookingReport/BookingRepoert";
import { AddGeofence } from "./components/addGeofence/AddGeofence";
import { GeofenceEvents } from "./components/geofenceEvents/GeofenceEvents";
import GeofenceManagement from "./components/geofenceManagement/GeofenceManagement";
import LiveLocation from "./components/liveLocation/LiveLocation";
import MaintenanceMode from "./components/systemSettings/innerCardsPages/maintenanceMode/MaintenanceMode";
import Vehicles from "./components/vechiles/Vehicles";
import ExpensePurposePage from "./pages/farmExpense/expensePurpose";
import { AddNewPurpose } from "./components/farmExpense/expensePurpose/addNewPurpose/AddNewPurpose";
import SuppliersPage from "./pages/suppliers";
import { AddSuplierProfile } from "./components/suppliers/addSuplier/AddSuplierProfile";
import NiftyratePage from "./components/topNavigationComp/masters/NiftyMaster/NiftyratePage";
import CreateNiftySale from "./components/topNavigationComp/masters/NiftyMaster/MasterForm/CreateNiftySale";
import BugetMaster from "./components/topNavigationComp/masters/bugetMaster/BugetMaster";
import BugetForm from "./components/topNavigationComp/masters/bugetMaster/MasterForm/BugetForm";
import ManageStallPage from "./pages/manageStall";
import ManageStallAdd from "./components/manageStall/manageStallAdd/ManageStallAdd";
import BranchPage from "./pages/catalog/branch";
import AddBranch from "./components/catalog/branch/addBranch/AddBranch";
import DesignationPage from "./pages/catalog/designation";
import AddDesination from "./components/catalog/designation/addDesination/AddDesination";
import ColorrPage from "./pages/catalog/colorr";
import AddNewColor from "./components/catalog/colorr/addNewColor/AddNewColor";
import AnimalTypePage from "./pages/catalog/animalType";
import AddNewAnimalType from "./components/catalog/animalType/addNewAnimalType/AddNewAnimalType";
import VactionList from "./components/catalog/vaccination/VactionList";
import AddVaccine from "./components/catalog/vaccination/AddVaccine";
import DummyUsers from "./components/topNavigationComp/masters/dummy-user/BugetMaster";
import DummyForm from "./components/topNavigationComp/masters/dummy-user/MasterForm/DummyForm";
import FoodUnitPage from "./pages/catalog/foodUnit";
import AddFoodUnit from "./components/catalog/foodUnit/addFoodUnit/AddFoodUnit";
import FoodItemPage from "./pages/catalog/foodItem";
import AddFoodItem from "./components/catalog/foodItem/addFoodItem/AddFoodItem";
import MonitoringServicesPage from "./pages/catalog/monitoringServices";
import { MonitoringServicesAdd } from "./components/catalog/monitoringServices/monitoringServicesAdd/MonitoringServicesAdd";
import { GetWiseReportsetPage } from "./pages/farmReport/getWiseReportset";
import OfficeExpenseReportSearch from "./components/farmsReports/officeExpenseReport/officeExpenseReportSearch/OfficeExpenseReportSearch";
import OfficeExpenseReport from "./components/farmsReports/officeExpenseReport/OfficeExpenseReport";
import EmployeeSalaryReport from "./components/farmsReports/employeeSalaryReport/EmployeeSalaryReport";
import MilkSaleReport from "./components/farmsReports/employeeSalaryReport/milkSaleReport/MilkSaleReport";
import DefoultContestMaster from "./components/topNavigationComp/masters/contestDefoult/DefoultContestMaster";
import DefultCreateContext from "./components/topNavigationComp/masters/contestDefoult/MasterForm/DefultCreateContext";
import MilkCollectReport from "./components/farmsReports/milkCollectReport/MilkCollectReport";
import VaccineMonitorReport from "./components/farmsReports/vaccineMonitorReport/VaccineMonitorReport";
import DairyDashboard from "./components/dairyDashboard/DairyDashboard";
import Estimate_requestPage from "./pages/estimate_request";
import Add_estimate_request from "./components/estimate_request/add_estimate_request/Add_estimate_request";
import DeliveryChallanPage from "./pages/transaction/deliveryChallan";
import ProposalListPage from "./pages/proposalListpage";
import AddProposalPage from "./pages/addproposalPage";
import ContractsPage from "./pages/contractsPage";
import AddNewContractPage from "./pages/addNewContract";

import VehicleList from "./components/vehicleList/VehicleList";
import VehicleGroup from "./components/vehicleGroup/VehicleGroup";
import VehicleDetails from "./components/vehicleDetails/VehicleDetails";
import AddVehicle from "./components/addVehicle/AddVehicle";
import { DeliveryChallanAdd } from "./components/transaction/deliveryChallan/deliveryChallanAdd/DeliveryChallanAdd";
import { DeliveryChallanDetails } from "./components/transaction/deliveryChallan/deliveryChallanDetails/DeliveryChallanDetails";
import ElectronicsDashboardPage from "./pages/electronicsDashboard";
import { SalesInvoiceforUpdatePage } from "./pages/transaction/salesInvoiceforUpdate";
import { SalesInvoiceforAdd } from "./components/transaction/salesInvoiceforUpdate/salesInvoiceforAdd/SalesInvoiceforAdd";
import { RetailPricePendingforApprovalPage } from "./pages/transaction/retailPricePendingforApproval";
import { DistributorCreditControlPage } from "./pages/transaction/distributorCreditControl";

import TasksListPage from "./pages/taskslistpage";
import AddNewTaskPage from "./pages/addNewTaskPage";
import TasksOverviewPage from "./pages/tasksOverviewPage";
import TaskTemplateListPage from "./pages/taskTemplateListPage";
import AddNewTaskTemplatePage from "./pages/addNewTaskTemplatePage";
import AddNewTaskFromTemplatePage from "./pages/addNewTaskFromTemplatePage";
import Project from "./pages/project";
import NewProject from "./pages/new-project";
import { SaleList } from "./components/cowSale/saleList/SaleList";
//---------------------JUNAID IMPORT END --------------------------

// -------------------------DAUD----IMPORT-start----------------
import CreditNotesPage from "./pages/salesPage/creditNotes";
import NewCreditNotes from "./components/sales/creditNotes/newCreditNotes/NewCreditNotes";
import InvoicesPage from "./pages/salesPage/invoices";
import CreateNewInvoice from "./components/sales/invoices/createNewInvoice/CreateNewInvoice";
import ExpenseSubCategoryPage from "./pages/expenses/expenseSubCategory";
// import ExpenseListPage from "./pages/expenses/expenseList";
import AddExpense from "./components/expenses/expenseList/addExpense/AddExpense";
import FormSubSubModule from "./pages/RolePermission/subSubModule/formSubSubModule/FormSubSubModule";
import MainSubSubModule from "./pages/RolePermission/subSubModule/mainSubSubModule/MainSubSubModule";
import Inward from "./components/logistics/inward/Inward";
import InwardForm from "./components/logistics/inward/inwardForm/InwardForm";
import Onward from "./components/logistics/outward/Onward";
import OnwardForm from "./components/logistics/outward/onwardForm/OnwardForm";
import MainCustomerrView from "./pages/CustomerView/profile/indexPage";
import ContactTable from "./pages/CustomerView/contacts/Contacts";
import KeepInTuch from "./pages/CustomerView/keepintuch/KeepInTuch";
import KitConfigration from "./pages/CustomerView/kitConfig/KitConfigration";
import NotesCunstomer from "./pages/CustomerView/notes/NotesCunstomer";
import ProposalList from "./components/proposalListComp/ProposalList";
import SkuMaster from "./components/logistics/inward/inwardForm/skuMaster/SkuMaster";
import FormSkuMaster from "./components/logistics/inward/inwardForm/skuMaster/formSkuMaster/FormSkuMaster";
import TransportMaster from "./components/logistics/outward/onwardForm/transportMaster/TransportMaster";
import FormTransportMaster from "./components/logistics/outward/onwardForm/transportMaster/formTransportMaster/FormTransportMaster";
import PrintInvoice from "./components/logistics/printInvoice/PrintInvoice";
import EstimateList from "./pages/CustomerView/estimates/EstimatesPage";

import OrderList from "./pages/orderlist";
import AddNewOrder from "./pages/addneworder/addneworder";
import BookingList from "./pages/bookinglist";
import AddNewBooking from "./pages/addnewbooking";
import EstimateForm from "./pages/CustomerView/estimates/EstimateForm";
import Estimate from "./pages/CustomerView/estimates/Estimate";
import TicketsPage from "./pages/CustomerView/tickets/TicketsPage";
import ServiceList from "./pages/CustomerView/service/ServiceList";
import { CrmElectronicPage } from "./pages/transaction/crmElectronic";
import CrmElectronicAdd from "./components/transaction/crmElectronic/crmElectronicAdd/CrmElectronicAdd";
import CrmElectronicDetails from "./components/transaction/crmElectronic/crmElectronicDetails/CrmElectronicDetails";
import { LeaveApplicationPage } from "./pages/transaction/leaveApplication";
import LeaveApplicationAdd from "./components/transaction/leaveApplication/leaveApplicationAdd/LeaveApplicationAdd";
import ClosePendingDCManuallyPage from "./pages/transaction/closePendingDCManually";
import { ClosePendingDCManuallyAdd } from "./components/transaction/closePendingDCManually/closePendingDCManuallyAdd/ClosePendingDCManuallyAdd";
import CrmDistributionCollectionPage from "./pages/transaction/crmDistributionCollection";
import CrmDistributionCollectionAdd from "./components/transaction/crmDistributionCollection/crmDistributionCollectionAdd/CrmDistributionCollectionAdd";
import { CrmDistributionSalesPage } from "./pages/transaction/crmDistributionSales";
import CrmDistributionSalesAdd from "./components/transaction/crmDistributionSales/crmDistributionSalesAdd/CrmDistributionSalesAdd";
import InwordOutwardRegister from "./components/logistics/reports/inwordOutwardRegister/InwordOutwardRegister";
import BillButnotDispatch from "./components/logistics/reports/billButNotDispatch/BillButnotDispatch";
import Materialinbutpurch from "./components/logistics/reports/materialinbutpurch/Materialinbutpurch";
import PurchaseNotmatched from "./components/logistics/reports/purchaseNotmatched/PurchaseNotmatched";
import PurchaseInward from "./components/logistics/reports/purchaseInward/PurchaseInward";
import FilesPage from "./pages/CustomerView/files/FilesPage";
import Vaultpage from "./pages/CustomerView/vault/Vaultpage";
import ReminderPage from "./pages/CustomerView/reminder/ReminderPage";
import StockJournalOutwardPage from "./pages/logistics/stockJournalOutward";
import StockJournalOutwardAdd from "./components/logistics/stockJournalOutward/stockJournalOutwardAdd/StockJournalOutwardAdd";
import VehicleLoadingSheetPage from "./pages/logistics/vehicleLoadingSheet";
import VehicleLoadingSheetAdd from "./components/logistics/vehicleLoadingSheet/vehicleLoadingSheetAdd/VehicleLoadingSheetAdd";
import VehicleLoadingSheetDeatils from "./components/logistics/vehicleLoadingSheet/vehicleLoadingSheetDetails/VehicleLoadingSheetDeatils";
import { ReturnManagementPage } from "./pages/logistics/returnManagement";
import WarehouseStocktransferPage from "./pages/logistics/warehouseStocktransfer";
import WarehouseStocktransferAdd from "./components/logistics/warehouseStocktransfer/warehouseStocktransferAdd/WarehouseStocktransferAdd";
import LedgerReportsPage from "./pages/electronicsReports/accountReport/ledgerReports";
import TalukaWiseDealerListPage from "./pages/electronicsReports/accountReport/talukaWiseDealerList";
import GroupSummaryPage from "./pages/electronicsReports/accountReport/groupSummary";
import QuotationReportPage from "./pages/report/quotationReport";
import JobworkOutstockStatementPage from "./pages/report/jobworkReport/jobworkOutstockStatement";
import JobworkoutOrderPage from "./pages/report/jobworkReport/jobworkOutOrder";
import SalesOrderBookPage from "./pages/report/orderBook/salesOrderBook";
import PurchaseOrderBookPage from "./pages/report/orderBook/purchaseOrderBook";
// -------------------------DAUD----IMPORT-End----------------

import Budget from "./pages/budgetlist";
import AddNewBudget from "./pages/addgudget";
import Costing from "./pages/costinglist";
import CostingForm from "./pages/costingform";
import SimpleList from "./pages/sample";
import AddNewSimple from "./pages/addnewsample";
import ShipmentList from "./pages/shipmentlist";
import AddNewShipment from "./pages/Addnewshipment";
import ProductList from "./pages/productlist";
import DailyProduction from "./pages/dailyproduction";
import StartDays from "./components/start-day/StartDays";
import VehicleType from "./components/topNavigationComp/masters/veicle/VehicleType";
import VehicleTypeForm from "./components/topNavigationComp/masters/veicle/MasterForm/VehicleTypeForm";
import TourType from "./components/topNavigationComp/masters/Toure/TourType";
import ToureTypeForm from "./components/topNavigationComp/masters/Toure/MasterForm/ToureTypeForm";
import ReturnManagementReconcile from "./components/logistics/reports/returnManagementReconcile/ReturnManagementReconcile";
import Pendingdoc from "./components/logistics/reports/pendingdoc/Pendingdoc";
import PendingInward from "./components/logistics/reports/pendingInward/PendingInward";
import GroupPage from "./components/topNavigationComp/masters/group/GroupPage";
import GroupForm from "./components/topNavigationComp/masters/group/MasterForm/GroupForm";
import LeagerPage from "./pages/CustomerView/leager/LeagerPage";
import AddLeager from "./pages/CustomerView/leager/AddLeager";
import NewsPage from "./components/topNavigationComp/masters/news/NewsPage";
import NewsForm from "./components/topNavigationComp/masters/news/MasterForm/NewsForm";
import SalesRegisters from "./components/kingsonreports/sales/SalesRegisters";
import UpdateSalesRegisterDetail from "./components/kingsonreports/sales/updateSalesRegisterDetails/UpdateSalesRegisterDetail";
import SalesRegisterWithExpDetails from "./components/kingsonreports/salesRegisterWithExp/salesRegisterWithExpDetails/SalesRegisterWithExpDetails";
import CnEntryWnStocklist from "./components/kingsonreports/cNEntryWNStock/CnEntryWnStocklist";
import AccountLedgerPage from "./pages/report/accountBook/accountLedger";
import ActiveAccountLedgerPage from "./pages/report/accountBook/activeAccountLedger";
import VoucherlistPage from "./pages/report/accountBook/voucherList";
import DayBookPage from "./pages/report/accountBook/dayBook";
import BankBookPage from "./pages/report/accountBook/bankBook";
import ReceiptRegisterPage from "./pages/report/accountBook/receiptRegister";
import CashBookPage from "./pages/report/accountBook/cashBook";
import BankPaymentPage from "./pages/transaction/bankCash/bankPayment";
import AddBankPayment from "./components/transaction/bankCash/bankPayment/addBankPayment/AddBankPayment";
import PaymentRequestViewPage from "./pages/paymentRequestView";
import PurchaseRegister from "./components/kingsonreports/purchaseregister/PurchaseRegister";
import Purchaseregisterform from "./components/kingsonreports/purchaseregister/purchaseregisterform/Purchaseregisterform";
import StockRegister from "./components/kingsonreports/stockSheet/stockRegister/StockRegister";
import ProductLedger from "./components/kingsonreports/stockSheet/stockRegister/stockRegisterList/productledger/ProductLedger";
// import WallRep from "./pages/Walletreport";
import AddUpdateVirtualWall from "./components/virtualWallet/addUpdateVirtualWall/AddUpdateVirtualWall";
import ContraPage from "./pages/transaction/bankCash/contra";
import ContraAdd from "./components/transaction/bankCash/contra/contraAdd/ContraAdd";
import { GSTExpenseEntryPage } from "./pages/transaction/gst/GSTExpenseEntry";
import GSTExpenseEntryAdd from "./components/transaction/gst/GSTExpenseEntry/GSTExpenseEntryAdd/GSTExpenseEntryAdd";
import RcmEntryPage from "./pages/transaction/gst/RcmEntry";
import RcmEntryAdd from "./components/transaction/gst/RcmEntry/RcmEntryAdd/RcmEntryAdd";
import GSTIncomePage from "./pages/transaction/gst/GSTIncome";
import GSTIncomeAdd from "./components/transaction/gst/GSTIncome/GSTIncomeAdd/GSTIncomeAdd";
import SalesBill from "./components/topNavigationComp/masters/news/NewsPage";
import SalesBills from "./components/topNavigationComp/masters/salesbill/SalesBill";
import SalesAdd from "./components/topNavigationComp/masters/salesbill/MasterForm/SalesAdd";
import SalesReturn from "./components/topNavigationComp/masters/salesreturn/SalesReturn";
import SalesAddRetuen from "./components/topNavigationComp/masters/salesreturn/MasterForm/SalesAdd";
import PrirotyMaster from "./components/topNavigationComp/masters/priorityTask/PrirotyMaster";
import PrirotyAdd from "./components/topNavigationComp/masters/priorityTask/masterform/PrirotyAdd";
import RelatedMaster from "./components/topNavigationComp/masters/relatedto/RelatedMaster";
import RelatedAdd from "./components/topNavigationComp/masters/relatedto/masterform/RelatedAdd";
import PrirotyMas from "./components/topNavigationComp/masters/priority/PrirotyMas";
import TaskAdd from "./components/topNavigationComp/masters/priority/masterform/TaskAdd";
import NatureMaster from "./components/topNavigationComp/masters/nature/NatureMaster";
import NatureAdd from "./components/topNavigationComp/masters/nature/masterform/NatureAdd";
import ProjectFrom from "./components/project/projectform";
import ProductionReportPage from "./pages/report/productionReport";


/* -----------------Moin Import File Start------------------------ */
import SalesIvoiceListPage from "./pages/salesInvoiceListPage";
import AddNewSaleInvoicePage from "./pages/addNewSaleInvoicePage";
import InterBankStockTransferPage from "./pages/interBankStockTransferPage";
import AddInterBankStockTransferPage from "./pages/addInterBankStockTransferPage";
import SalesReturnPage from "./pages/salesReturnPage";
import AddSaleRetunPage from "./pages/addSaleRetunPage";
import SalesRetunWithoutGstPage from "./pages/salesRetunWithoutGstPage";
import AddSalesReturnWithoutGstPage from "./pages/addSalesRetunWithoutGstPage";
import BtrPage from "./pages/btrPage";
import AddBtrPage from "./pages/addBtrPage";
import NegativeSock from "./components/kingsonreports/stockSheet/negativeStock/NegativeSock";
import ViewProductionForm from "./components/kingsonreports/stockSheet/stockRegister/stockRegisterList/productledger/viewProductionform/ViewProductionForm";
import RecordLevel from "./components/kingsonreports/stockSheet/recordlevel/RecordLevel";
import StockStatement from "./components/kingsonreports/stockSheet/stockStatement/StockStatement";
import BatchStock from "./components/kingsonreports/stockSheet/batchStock/BatchStock";
import BatchWithLocation from "./components/kingsonreports/stockSheet/batchWithLocation/BatchWithLocation";
import ViewProductionEntry from "./components/kingsonreports/productionReport/viewProductionEntry/ViewProductionEntry";

import EditBankReceipt from "./components/kingsonreports/AccountBook/receiptRegister/editBankReceipt/EditBankReceipt";
import BillToBill from "./components/kingsonreports/AccountBook/receiptRegister/editBankReceipt/billToBill/BillToBill";
import UserLog from "./components/kingsonreports/AccountBook/receiptRegister/editBankReceipt/userLog/UserLog";


import PurchaseOrderListPage from "./pages/purchaseOrderListpage";
import AddPurchaseOrderPage from "./pages/addpurchaseOrderPage";
import PurchaseInvoiceListPage from "./pages/purchaseInvoiceListPage";
import AddPurchaseInvoicePage from "./pages/addPurchaseInvoicePage";
import PurchaseReturnPage from "./pages/purchaseReturnPage";
import AddPurchaseReturnPage from "./pages/addPurchaseReturnPage";
import PurchaseReturnWithoutGstPage from "./pages/purchaseReturnWithoutGstPage";
import AddPurchaseReturnWithoutGstPage from "./pages/addPurchaseReturnWithoutGstPage";
/* -----------------Moin Import File END------------------------ */


import GSTUtilizationPage from "./pages/transaction/gst/GSTUtilization";
import { GSTUtilizationAdd } from "./components/transaction/gst/GSTUtilization/GSTUtilizationAdd/GSTUtilizationAdd";
import GstPaymentPage from "./pages/transaction/gst/GSTPayment";
import GSTPaymentAdd from "./components/transaction/gst/GSTPayment/GSTPaymentAdd/GSTPaymentAdd";
import GSTJournalPage from "./pages/transaction/gst/GSTJournal";
import GSTJournalAdd from "./components/transaction/gst/GSTJournal/GSTJournalAdd/GSTJournalAdd";
import EntryCnStocksPage from "./pages/transaction/gst/entryCnStocks";
import EntryCnStocksAdd from "./components/transaction/gst/entryCnStocks/entryCnStocksAdd/EntryCnStocksAdd";
import EntryDnStocksPage from "./pages/transaction/gst/entryDnStocks";
import EntryDnStocksAdd from "./components/transaction/gst/entryDnStocks/entryDnStocksAdd/EntryDnStocksAdd";
import Batchexpiring from "./components/kingsonreports/stockSheet/batchexpiring/Batchexpiring";
import LocationWiseStock from "./components/kingsonreports/stockSheet/locationWiseStock/LocationWiseStock";
import Unusedserialnostock from "./components/kingsonreports/stockSheet/unUsedsriealNoStock/Unusedserialnostock";
import PodUpdation from "./components/podUpdation/PodUpdation";
import { GenerateBill } from "./components/generateBill/GenerateBill";
import DcProduct from "./components/dcProduct/DcProduct";
import InwardProduct from "./components/inwardProduct/InwardProduct";
import CNEntrywithStockPage from "./pages/transaction/gst/CNEntrywithStock";
import CNEntrywithStockAdd from "./components/transaction/gst/CNEntrywithStock/CNEntrywithStockAdd/CNEntrywithStockAdd";
import DNEntrywithStockPage from "./pages/transaction/gst/DNEntrywithStock";
import DNEntrywithStockAdd from "./components/transaction/gst/DNEntrywithStock/DNEntrywithStockAdd/DNEntrywithStockAdd";
import QuatationPage from "./pages/transaction/gst/Quatations/Quatation";
import QuatationAdd from "./components/transaction/Quatations/Quatation/QuatationAdd/QuatationAdd";
import PurchaseQuatationPage from "./pages/transaction/gst/Quatations/purchaseQuatation";
import PurchaseQuatationAdd from "./components/transaction/Quatations/purchaseQuatation/purchaseQuatationAdd/PurchaseQuatationAdd";
import SalesOrderPage from "./pages/transaction/order/saleOrder";
import SalseOrderAdd from "./components/transaction/order/salseOrder/salseOrderAdd/SalseOrderAdd";
import PurchageOrderPage from "./pages/transaction/order/purchageOrder";
import PurchageOrderAdd from "./components/transaction/order/purchageOrder/purchageOrderAdd/PurchageOrderAdd";
import ProfitRegister from "./components/kingsonreports/stockSheet/analysisReports/profitRegister/ProfitRegister";
import Partywisesalepurchase from "./components/kingsonreports/stockSheet/analysisReports/partywisesalepurchase/Partywisesalepurchase";
import Productwisepartyreport from "./components/kingsonreports/stockSheet/analysisReports/productwisepartyreport/Productwisepartyreport";
import Partycrossreports from "./components/kingsonreports/stockSheet/analysisReports/partycrossreport/Partycrossreports";
import Saleswisereports from "./components/kingsonreports/stockSheet/analysisReports/saleswisereport/Saleswisereports";
import OrderFromQuationPage from "./pages/transaction/order/orderFromQuation";
import OrderFromQuationAdd from "./components/transaction/order/orderFromQuation/orderFromQuationAdd/OrderFromQuationAdd";
import PurchaseOrderFromQuotationPage from "./pages/transaction/order/purchaseOrderFromQuotation";
import PurchaseOrderFromQuotationAdd from "./components/transaction/order/purchaseOrderFromQuotation/purchaseOrderFromQuotationAdd/PurchaseOrderFromQuotationAdd";
import SalesChallanPage from "./pages/transaction/challan/salesChallan";
import SalesChallanAdd from "./components/transaction/challan/salesChallan/salesChallanAdd/SalesChallanAdd";
import PurchaseChallanPage from "./pages/transaction/challan/purchaseChallan";
import PurchaseChallanAdd from "./components/transaction/challan/purchaseChallan/purchaseChallanAdd/PurchaseChallanAdd";
import SalesInvoiceMaster from "./components/topNavigationComp/masters/salesInvoice/SalesInvoiceMaster";
import SalesInvoiceForm from "./components/topNavigationComp/masters/salesInvoice/masterform/SalesInvoiceForm";
import SaleExpenseFormula from "./components/topNavigationComp/masters/Sale-Expense-Formula/SaleExpenseFormula";
import SalesExpenseForm from "./components/topNavigationComp/masters/Sale-Expense-Formula/masterform/SalesExpenseForm";
import SalesLinksForm from "./components/topNavigationComp/masters/Sale-links/masterform/SalesLinksForm";
import PhonePayForm from "./components/topNavigationComp/masters/phonepay/masterform/PhonePayForm";
import RzerPayPayForm from "./components/topNavigationComp/masters/rozerpay/masterform/RzerPayPayForm";
import REMSstatus from "./pages/rems-status";
import EditPMSenquary from "./pages/Editpmsenquary";
import Editbooking from "./pages/Editbooking/Index";
// import Report from "./pages/Reports";
import BookingStatus from "./pages/bookingStatus";
import PropertyHome from "./pages/Property";
import Compaigs from "./pages/Compaigs";
import NEwCampaigs from "./pages/NewCampaigs/Index";
import BookingSnap from "./pages/bookingSnap";
import Ventures from "./pages/ventures";
import Newventures from "./pages/Newventures";
import Floor from "./pages/Floor";
import NewFloor from "./pages/newFloor";
import Block from "./pages/Block";
import NewBlock from "./pages/newblock";
import TaxMaster from "./components/topNavigationComp/masters/Tax-master/TaxMaster";
import TaxAdd from "./components/topNavigationComp/masters/Tax-master/masterform/TaxAdd";
import TaxGroup from "./components/topNavigationComp/masters/Tax-group/TaxGroup";
import TaxGroupAdd from "./components/topNavigationComp/masters/Tax-group/masterform/TaxGroupAdd";
import TcsMaster from "./components/topNavigationComp/masters/TcsMaster/TcsMaster";
import TcsAdd from "./components/topNavigationComp/masters/TcsMaster/masterform/TcsAdd";
import Walletreport from "./components/topNavigationComp/masters/walletReport/Walletreport";
import BuildingsMaster from "./components/topNavigationComp/masters/building/BuildingsMaster";
import BuildAdd from "./components/topNavigationComp/masters/building/masterform/BuildAdd";
import FloorMaster from "./components/topNavigationComp/masters/Floor/FloorMaster";
import FloorAdd from "./components/topNavigationComp/masters/Floor/masterform/FloorAdd";
import Withdrawals from "./components/topNavigationComp/masters/withdrawls/Withdrawals";


// daud work
// 17:10:24:   work here----
import TdsReportPage from "./pages/report/tdsReport";
import SalesChallanBookPage from "./pages/report/challanBook/salesChallanBook";
import PurchaseChallanBookPage from "./pages/report/challanBook/purchaseChallanBook";
import Gstr3bPage from "./pages/report/gstReports/gstr3b";
import GstrIntegrity from "./components/kingsonreports/gstReports/gstr3b/GstrIntegrity";
import GstrReport1Page from "./pages/report/gstReports/gstr1";
import Gstr2Page from "./pages/report/gstReports/gstr2";
import GstReport9Page from "./pages/report/gstReports/gstr9";
import GstrSummaryPage from "./pages/report/gstReports/gstrSummary";

// ----18:10:23---import----//


// ---19:10:24--

import OpeningBalancePage from "./pages/report/finalReports/openingBalance";
import TrialBalancePage from "./pages/report/finalReports/TrialBalance";
import TradingAccountPage from "./pages/report/finalReports/tradingAccount";
import ProfitLossPage from "./pages/report/finalReports/profitLoss";
import BalanceSheetPage from "./pages/report/finalReports/balanceSheet";
import SalesFromOrderPage from "./pages/transaction/challan/salesFromOrder";
import SalesFromOrderAdd from "./components/transaction/challan/salesFromOrder/salesFromOrderAdd/SalesFromOrderAdd";
import PurchangefromChalanPage from "./pages/transaction/challan/purchagefromChallan";
import PurchangefromChalanAdd from "./components/transaction/challan/purchangefromChalan/PurchangefromChalanAdd";
import ChallanReturnPage from "./pages/transaction/challan/challanReturn";
import ChallanReturnAdd from "./components/transaction/challan/challanReturn/challanReturnAdd/ChallanReturnAdd";
import StocksTrasferPage from "./pages/transaction/stockTransfer";
import StockTransferAdd from "./components/transaction/stockTransfer/stockTransferAdd/StockTransferAdd";
import ProductionEntryPage from "./pages/transaction/productionEntry";
import ProductionEntryAdd from "./components/transaction/productionEntry/productionEntryAdd/ProductionEntryAdd";
import ProductionPlaningPage from "./pages/transaction/productionsPlanning/productionPlanning";
import ProductionPlanningAdd from "./components/transaction/productionsPlanning/productionPlanning/productionPlanningAdd/ProductionPlanningAdd";
import ProductionIssuePage from "./pages/transaction/productionsPlanning/productionIssue";
import ProductionIssueDetails from "./components/transaction/productionsPlanning/productionIssue/productionIssueDetails/ProductionIssueDetails";
import JobworkOutOrderPage from "./pages/transaction/jobworkOut/jobworkOutOrder";
import JobworkOutOrderAdd from "./components/transaction/jobworkOut/jobworkOutOrder/jobworkOutOrderAdd/JobworkOutOrderAdd";
import JobworkOutIssuePage from "./pages/transaction/jobworkOut/jobworkOutIssue";
import JobworkOutIssueAdd from "./components/transaction/jobworkOut/jobworkOutIssue/jobworkOutIssueAdd/JobworkOutIssueAdd";
import JobworkOutRecipetPage from "./pages/transaction/jobworkOut/jobworkOutRecipet";
import JobworkOutRecipetAdd from "./components/transaction/jobworkOut/jobworkOutRecipet/jobworkOutRecipetAdd/JobworkOutRecipetAdd";
import BankPaymenttPage from "./pages/transaction/quickEntry/bankPayment";

import PropertyCharges from "./pages/propertycharges";
import CreatePropertyCharges from "./pages/CreatePropertycharges";
import PropertyShowing from "./pages/PropertyShowing";
import PropertyUnit from "./pages/PropertyUnit/Index";
import CreatePropertyShowing from "./pages/CreatePropertyShowing";
import CreatePropertyunit from "./pages/Createpropertyunit";
import PropertyStages from "./pages/PropertyStages";
import CreatePropertyStages from "./pages/CreateStages";
import PropertyStagePlane from "./pages/PropartyStageplan";

import { PurchaseInvoiceType } from "./components/purchaseInvoiceType/PurchaseInvoiceType";
import { AddPurchaseInvoiceType } from "./components/purchaseInvoiceType/addPurchaseInvoiceType/AddPurchaseInvoiceType";
import { PurchaseExpenseFormula } from "./components/purchaseExpenseFormula/PurchaseExpenseFormula";
import { AddPurchaseExpenseFormula } from "./components/purchaseExpenseFormula/addPurchaseExpenseFormula/AddPurchaseExpenseFormula";
import LinkPurchaseExpense from "./components/linkPurchaseExpense/LinkPurchaseExpense";
import { LinkExpenseWithInvoiceType } from "./components/linkPurchaseExpense/linkExpenseWithInvoiceType/LinkExpenseWithInvoiceType";
import Capital from "./components/hawala/capital/Capital";
import Depricition from "./components/hawala/depriciation/Depricition";
import Intrest from "./components/hawala/intrest/Intrest";
import DiscountKasarEntry from "./components/hawala/discountKasarEntry/DiscountKasarEntry";
import TdsCalculations from "./components/hawala/tdsCalculation/TdsCalculations";
import CommisionEntry from "./components/hawala/commisionEntry/CommisionEntry";
import ProductMerge from "./components/advanceUtility/productMerge/ProductMerge";
import CityMerge from "./components/advanceUtility/cityMerge/CityMerge";
import StateMerge from "./components/advanceUtility/statemerge/StateMerge";
import SpecificationMerge from "./components/advanceUtility/specificationmerge/SpecificationMerge";
import VoucherPrint from "./components/advanceUtility/vocherPrint/VoucherPrint";
import Barcodetility from "./components/advanceUtility/barcodeutility/Barcodetility";
import AddVoucher from "./components/kingsonreports/AccountBook/accountMaster/voucherMaster/addVoucher/AddVoucher";
import VoucherMasterList from "./components/kingsonreports/AccountBook/accountMaster/voucherMaster/voucherMasterList/VoucherMasterList";
import BusBookingMain from "./components/bus-booking-report/BusBookingMain";
import AccountLedgerPageView from "./pages/report/accountBook/accountLedgerView";
import TaxMasterPage from "./pages/setup/taxSetup/taxMaster";
import AddTaxMaster from "./components/setup/taxSetup/taxMaster/addTaxMaster/AddTaxMaster";
import TaxGroupPage from "./pages/setup/taxSetup/taxGroup";
import AddTaxGroup from "./components/setup/taxSetup/taxGroup/addTaxGroup/AddTaxGroup";

// ---26:10:24---import here---
import TcsMasterPage from "./pages/setup/taxSetup/tcsMaster";
import AddTcsMaster from "./components/setup/taxSetup/tcsMaster/addTcsMaster/AddTcsMaster";
import TcsCertificatePage from "./pages/setup/taxSetup/tcsCertificate";
import AddTcsCertificate from "./components/setup/taxSetup/tcsCertificate/addTcsCertificate/AddTcsCertificate";
import EmailSetupPage from "./pages/setup/emailSetup";

// ---28:10:24----import---here
import NotificationSetupPage from "./pages/setup/notificationSetup";
import SchedulerSetupPage from "./pages/setup/schedulerSetup";
import SmsSetupPage from "./pages/setup/smsSetup";
import ReminderSetupPage from "./pages/setup/reminderSetup";

// ---29:10:24---
import ReportSetupPage from "./pages/setup/reportSetup";
import SetupVoucher from "./components/setup/setupVoucher/SetupVoucher";
import InvoiceMaster from "./components/topNavigationComp/masters/invoiceType/InvoiceMaster";
import TypeInvoiceAdd from "./components/topNavigationComp/masters/invoiceType/masterform/TypeInvoiceAdd";
import ExpenseMaster from "./components/topNavigationComp/masters/expensemaster/ExpenseMaster";
import ExpenseAdd from "./components/topNavigationComp/masters/expensemaster/masterform/ExpenseAdd";
import Processgropmasterspage from "./pages/processgroupmaster";
import Processgroupmasterform from "./components/processgroupmaster/processgroupmasterform/Processgroupmasterform";
import BranchMasterPage from "./pages/branchmaster";
import BranchMasterForm from "./components/branchMaster/branchMasterform/BranchMasterForm";
import AssignedDocuments from "./components/topNavigationComp/masters/AssignedDoc/AssignedDocuments";
import AssignedAdd from "./components/topNavigationComp/masters/AssignedDoc/masterform/AssignedAdd";
import PriceMasterPage from "./pages/priceList/priceMaster";
import PriceMasterAdd from "./components/priceList/priceMaster/priceMasterAdd/PriceMasterAdd";
import RateSheetPage from "./pages/priceList/rateSheet";
import RateSheertAdd from "./components/priceList/rateSheert/rateSheertAdd/RateSheertAdd";
import ProcessPage from "./pages/process";
import ProcessAdd from "./components/process/processAdd/processAdd";
import DocumentCategoriesPage from "./pages/documentManagement/documentcategories";
import DocumentCategoriesAdd from "./components/documentManagement/documentCategories/documentCategoriesAdd/DocumentCategoriesAdd";
import AddChildreenCategory from "./components/documentManagement/documentCategories/addChildreenCategory/AddChildreenCategory";
import DocumentsArchivePage from "./pages/documentManagement/documentsArchive";
import DocumentsAuditTrailPage from "./pages/documentManagement/documentsAuditTrail";
import AllDocumentPage from "./pages/documentManagement/allDocument";
import AllDocumentAdd from "./components/documentManagement/allDocument/allDocumentAdd/AllDocumentAdd";
import QuotationList from "./pages/CustomerView/Quate/QuotationList";
import QuotationAdd from "./pages/CustomerView/Quate/QuotationAdd";
import MistryMaster from "./components/topNavigationComp/masters/mistry/MistryMaster";
import MistryAdd from "./components/topNavigationComp/masters/mistry/masterform/MistryAdd";
import OrganisationSettings from "./components/organisationSettings/OrganisationSettings";
import Reccetemplet from "./components/organisationSettings/moduleSettings/reccetemplete/Reccetemplet";
import DesignSection from "./components/organisationSettings/designSection/DesignSection";
import SalesPersonPage from "./pages/travelCrmReports/salesperson";
import SalesPersonWisePage from "./pages/travelCrmReports/salespersonWise";
import ContactWisePage from "./pages/travelCrmReports/contactWise";
import LeadWisePage from "./pages/travelCrmReports/leadWise";
import LeadCreatedWisePage from "./pages/travelCrmReports/leadCreatedWise";
// import CreateStageplan from "./pages/NewStagesplan";
import UnitPage from "./pages/unitPage";
import BrandPage from "./pages/brandPage";
import CategoryPage from "./pages/categoryPage";
import IndustryPage from "./pages/indstryPage";
import ColorsPage from "./pages/colorsPage";
import SizePage from "./pages/sizePage";
import InhouseOrderPage from "./pages/inhouseOrderPage";
import SellerOrdersPage from "./pages/sellerOrdersPage";
import AllPickupPointsOrderPage from "./pages/allPickupPointOrdersPage";
import AllCancelledOrdersPage from "./pages/allCancelledOrdersPage";
import OrdersStatuspage from "./pages/ordersStatusPage";
import AllOrdersPage from "./pages/allOrdersPage";
import SubjectMasters from "./components/topNavigationComp/masters/subject/SubjectMasters";
import SubjectForm from "./components/topNavigationComp/masters/subject/MasterForm/SubjectForm";
import BookCodeMasters from "./components/topNavigationComp/masters/bookcode/BookCodeMasters";
import BookCodeForm from "./components/topNavigationComp/masters/bookcode/MasterForm/BookCodeForm";
import AttributesPage from "./pages/attributesPage";
import ProjectMasters from "./components/topNavigationComp/masters/projects/ProjectMasters";
import ProjectDetailMasters from "./components/topNavigationComp/masters/projectDetail/ProjectDetailMasters";
import ProjectAddForm from "./components/topNavigationComp/masters/projects/MasterForm/ProjectAddForm";
import MiscellaneousPage from "./pages/travelCrmReports/miscellaneous";
import CompanyInvoicelistPage from "./pages/travelCrmReports/companyInvoicelist";
import CompanyRecieptlistPage from "./pages/travelCrmReports/companyRecieptlist";
import UserHistoryPage from "./pages/travelCrmReports/userHistory";
import LoginHistoryyPage from "./pages/travelCrmReports/loginHistory";
import CustomerCallsStatusPage from "./pages/travelCrmReports/customerCallsStatus";
import CallByUserPage from "./pages/travelCrmReports/callByUser";
import AllLeadWiseHistoryPage from "./pages/travelCrmReports/allLeadWiseHistory";
import PassportVisaExpiryPage from "./pages/travelCrmReports/passportVisaExpiry";
import TaskRemindersPage from "./pages/travelCrmReports/taskReminders";
import ContactReportUserWisePage from "./pages/travelCrmReports/contactReportUserWise/ContactReportUserWise";
import Taskmanager from "./components/taskManager/Taskmanager";
import TaskComent from "./components/taskManager/taskComment/TaskComent";
import HotelVoucherPage from "./pages/travelCrmReports/hotelVoucher";
import TransportVoucher from "./pages/travelCrmReports/transportVoucher";
import FlightVoucher from "./pages/travelCrmReports/flightVoucher";
import AllCustomer from "./pages/travelCrmReports/allCustomer";
import InvouceReciept from "./pages/travelCrmReports/invoiceReciept";
import BirthdatAnniversary from "./pages/travelCrmReports/birthdayAnniversary";
import SightseeingPage from "./pages/manageTravelBussiness/sightseeing";
import Addsightseeing from "./components/manageTravelBussiness/sightseeing/Addsightseeing/Addsightseeing";
import SightseeingView from "./components/manageTravelBussiness/sightseeing/sightseeingView/SightseeingView";
import LeadFollowUpCallsPage from "./pages/travelCrmReports/leadFollowUpCalls";
import SupplierPurchagePage from "./pages/travelCrmReports/supplierPurchage";
import SuplierPaidReportPage from "./pages/travelCrmReports/suplierPaidReport";
import CustomerPaymentReportPage from "./pages/travelCrmReports/customerPaymentReport";
import CustomerSaleReportPage from "./pages/travelCrmReports/customerSaleReport";
import BillPaymentReminderReportPage from "./pages/travelCrmReports/billPaymentReminderReport";
import TravelProfitLossPage from "./pages/travelCrmReports/profitLoss";
import CancleReportPage from "./pages/travelCrmReports/cancleReport";
import TaskType from "./components/topNavigationComp/masters/taskType/TaskType";
import Tasktypeform from "./components/topNavigationComp/masters/taskType/tasktype/Tasktypeform";
import TaskStage from "./components/topNavigationComp/masters/taskStatge/TaskStage";
import TaskStageForm from "./components/topNavigationComp/masters/taskStatge/taskstageform/TaskStatgeForm";
import B2bInvoicePage from "./pages/travelCrmReports/b2bInvoice";
import B2cInvoicePage from "./pages/travelCrmReports/b2cInvoice";
import SightseeingRateList from "./components/manageTravelBussiness/sightseeing/sightseeingRateList/SightseeingRateList";
import SightseeingRateAdd from "./components/manageTravelBussiness/sightseeing/sightseeingRateList/sightseeingRateAdd/SightseeingRateAdd";
import AllHotalPage from "./pages/manageTravelBussiness/hotel";
import HotelAdd from "./components/manageTravelBussiness/hotel/hotelAdd/HotelAdd";
import TagsPage from "./pages/manageTravelBussiness/tags";
import TagsAdd from "./components/manageTravelBussiness/tags/tagsAdd/TagsAdd";
import ProjectModual from "./components/topNavigationComp/masters/projectModuel/ProjectModual";
import ProjectModualForm from "./components/topNavigationComp/masters/projectModuel/MasterForm/ProjectModualForm";
import ProjectModualTemplate from "./components/topNavigationComp/masters/project-module-template/ProjectModualTemplate";
import ProjectModualTempForm from "./components/topNavigationComp/masters/project-module-template/MasterForm/ProjectModualTempForm";
import BussnessCateg from "./components/topNavigationComp/masters/bussnescateg/BussnessCateg";
import BcategForm from "./components/topNavigationComp/masters/bussnescateg/MasterForm/BcategForm";
import TravelLeadPage from "./pages/travelLeads";
import ViewLeads from "./components/travelLeads/travelLeads/LeadList/viewLeads/ViewLeads";
import TravelVoucherPage from "./pages/travelLeads/travelVoucher";
import AddHotelVoucher from "./components/travelLeads/Travelvouchers/voucherHotalList/addHotelVoucher/AddHotelVoucher";
import AddServiceVoucher from "./components/travelLeads/Travelvouchers/voucherServiceList/addServiceVoucher/AddServiceVoucher";
import AddFlightVoucher from "./components/travelLeads/Travelvouchers/voucherFlightList/addFlightVoucher/AddFlightVoucher";
import TravelInvoice from "./components/travelLeads/travelInvoice/TravelInvoice";
import SystemSettingss from "./pages/system_settings/systemSettings/SystemSettings";
import ListCouponPage from "./pages/listCouponPage";
import AddNewCouponPage from "./pages/addNewCouponPage";
import ClubUserPointPage from "./pages/clubUserPointsPage";
import UpdateClubUserPoints from "./components/clubUserPointsComp/UpdateClubUserPoints";
import ClubPointConfigurationPage from "./pages/clubPointConfigurationPage";
import ListSetProductPointPage from "./pages/listSetProductPointPage";
import AddSetProductPointPage from "./pages/addSetProductPointPage";
import SocialRewardSharePointPage from "./pages/socialRewardSharePointPage";
import SocailMediaLikeRewardPointPage from "./pages/socialMediaLikeRewardPointPage";
import AddProductPage from "./pages/addProductPage";
import ListProductPage from "./pages/listProductPage";
import InvoiceAdd from "./components/travelLeads/travelInvoice/invoice/invoiceAdd/InvoiceAdd";
import AddpaymentReceipt from "./components/travelLeads/travelInvoice/paymentReceipt/AddpaymentReceipt/AddpaymentReceipt";
import CreditNoteAdd from "./components/travelLeads/travelInvoice/creditNote/creditNoteAdd/CreditNoteAdd";
import FlightInvoiceAdd from "./components/travelLeads/travelInvoice/flightInvoiceList/flightInvoiceAdd/FlightInvoiceAdd";
import HotelTypePage from "./pages/masterTraval/hotalType";
import HotelTypeAdd from "./components/masterTraval/hotelType/hotelTypeAdd/HotelTypeAdd";
import RatingPage from "./pages/masterTraval/rating";
import RatingAdd from "./components/masterTraval/rating/ratingAdd/RatingAdd";
import InvoiceTab from "./components/billings/InvoiceTab";
import TravelVisaTypePage from "./pages/travelCrmMaster/travelVisaType";
import TravelVisaTypeAdd from "./components/travelCrmMaster/travelVisaType/travelVisaTypeAdd/TravelVisaTypeAdd";
import TravelVisaCategoryPage from "./pages/travelCrmMaster/travelVisaCategory";
import TravelVisaCategoryAdd from "./components/travelCrmMaster/travelVisaCategory/travelVisaCategoryAdd/TravelVisaCategoryAdd";
import TravelVisaMasterPage from "./pages/travelCrmMaster/travelVisaMaster";
import TravelVisaMasterAdd from "./components/travelCrmMaster/travelVisaMaster/travelVisaMasterAdd/TravelVisaMasterAdd";
import TravelInsurencePage from "./pages/travelCrmMaster/travelInsurence";
import TravelInsurenceAdd from "./components/travelCrmMaster/travelInsurence/travelInsurenceAdd/TravelInsurenceAdd";
import CancilaionTab from "./components/billings/cancillation/CancilaionTab";
import MultiplePrintings from "./components/billings/mltiplePrintings/MultiplePrintings";
import HotelCruieseVoucher from "./components/billings/hotelCruieseVoucher/HotelCruieseVoucher";
import RoomTypePage from "./pages/travelCrmMaster/roomType";
import RoomTypeAdd from "./components/travelCrmMaster/roomType/roomTypeAdd/RoomTypeAdd";
import ServiceeMasterrPage from "./pages/travelCrmMaster/serviceMaster";
import ServiceMasterAdd from "./components/travelCrmMaster/serviceMaster/serviceMasterAdd/ServiceMasterAdd";
import TravelPasswordPage from "./pages/travelCrmMaster/travelPassport";
import TravelPassportAdd from "./components/travelCrmMaster/travelPassport/travelPassportAdd/TravelPassportAdd";
import OtherMasterPage from "./pages/travelCrmMaster/otherMaster";
import OtherMasterAdd from "./components/travelCrmMaster/otherMaster/otherMasterAdd/OtherMasterAdd";
import LeadBookingReport from "./pages/lead-booked-wise";
import LeadStatusChange from "./pages/Lead-Status-Changes";
import NoReminderLead from "./pages/No-Reminder-Leads";
import UpComingTravel from "./pages/Upcoming-Travel";
import HotelRatesReport from "./pages/Hotel-Rates-Report";
import BranchWiseReport from "./pages/Branch-Wise-Report";
import ScheduleSMS from "./pages/Schedule-SMS";
import ContactSgainstCompany from "./pages/Contact-against-company";
import TagWise from "./pages/Tag-wise-Report";
import AddLeadForm from "./components/travelLeads/travelLeads/AddLead/AddLeadForm";
import MaintenancePlan from "./components/maintenance_plan/MaintenancePlan";
import HotelVoucher from "./components/travelCrmReports/hotelVoucher/HotelVoucher";
import HotelVouchers from "./components/billings/hotelCruieseVoucher/hotelCruieseVoucherTab/hotelVoucher/HotelVoucher";
import InvoiceForm from "./components/billings/invoiceForm/InvoiceForm";
import TravelPreferencePage from "./pages/travelCrmMaster/travelPreference";
import TravelPreferenceAdd from "./components/travelCrmMaster/travelPreference/travelPreferenceAdd/TravelPreferenceAdd";
import TravelForexPage from "./pages/travelCrmMaster/travelForex";
import TravelForexAdd from "./components/travelCrmMaster/travelForex/travelForexAdd/TravelForexAdd";
import TravelCruisePage from "./pages/travelCrmMaster/cruise";
import CruiseAdd from "./components/travelCrmMaster/cruise/cruiseAdd/CruiseAdd";
import TravelAdventurePage from "./pages/travelCrmMaster/travelAdventure";
import TravelAdventureAdd from "./components/travelCrmMaster/travelAdventure/travelAdventureAdd/TravelAdventureAdd";
import BusMasterPage from "./pages/travelCrmMaster/busMaster";
import BusMasterAdd from "./components/travelCrmMaster/busMaster/busMasterAdd/BusMasterAdd";
// import TravelQuotationAddPage from "./pages/travelQuotationAddPage";
// import ItenaryAdd from "./components/travelQuotationAddComp/ItenaryAdd";
// import FilghtAdd from "./components/travelQuotationAddComp/FilghtAdd";
// import QuotationInformation from "./components/travelQuotationAddComp/QuotationInformation";
// import TransportInformation from "./components/travelQuotationAddComp/TransportInformation";
import TravelPackageListPage from "./pages/travelPackageListPage";
import TravelPackageAddPage from "./pages/travelPackageAddPage";
import MasterPackageListPage from "./pages/masterPackageListPage";
import MasterPackageDetailPage from "./pages/masterPackageDetailPage";
import TravelPackageEditPage from "./pages/travelPackageEditPage";
import TravelsaleRegister from "./pages/TravelSaleRegister/index.js";
import TravelSaleSummery from "./pages/saleSummery/index.js";
import TravelPurchaseReport from "./pages/TravelpurchaseReport/index.js";
import TravelClassPage from "./pages/travelCrmMaster/travelClass/index.js";
import TravelClassAdd from "./components/travelCrmMaster/travelClass/travelClassAdd/TravelClassAdd.js";
import CustomerTypePage from "./pages/travelCrmMaster/customerType/index.js";
import CustomerTypeAdd from "./components/travelCrmMaster/customerType/customerTypeAdd/CustomerTypeAdd.js";
import TripTypePage from "./pages/travelCrmMaster/tripType/index.js";
import TripTypeAdd from "./components/travelCRM/tripType/tripTypeAdd/TripTypeAdd.js";

import SearchAccommodations from "./pages/DesertAdventure/Searchaccommodations/index.js";
import Availablehotelsforyourholiday from "./pages/DesertAdventure/Availablehotelsforyourholiday/Index.js";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [navigateState, setNavigateState] = useState(null);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // console.log(getToken());
    // requestPermissions()
    if (getToken2()) {
      dispatch(setIsLogin({ isLogin: true }));
      navigate(location?.pathname);
    }

  }, []);

  useEffect(() => {
    setIsAuthenticated(isLogin);


  }, [isLogin]);





  const [tokenNoti, setokenNoti] = useState(null);

  const sendNotification2 = async (token) => {
    try {
      let result = await sendNotification({ type: 'Browser', token: token });

    } catch (error) {

    }
  };

  async function requestPermissions() {


    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, { vapidKey: 'BPmnN4enu6SLX6ASW7dctK6Q0j3GnTUhL5ZRi16I6RDqGav4khN2JIHmdKcL4eTqwRBu-PWmaUa1G-Oaor7AcF4' }).then((currentToken) => {
          if (currentToken) {
            console.log('Got FCM device token:', currentToken);
            setokenNoti(currentToken)
            if (isLogin) {
              sendNotification2(currentToken)

            }
            // Send the token to your server or display it on the UI
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
      }
    })
  }
  console.log(window.localStorage.getItem('dashRout') == null);

  const [mnualData, setManualData] = useState()

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navigate to={"/loginPage"} />} />  */}
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to={"/loginPage"} />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<LoginPasswordReset />} />
            <Route path="*" element={<Navigate to="/loginPage" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to={`${window.localStorage.getItem('dashRout')}`} />} />
            {/* <Route path="/" element={<Navigate to={`/admin`} />} /> */}
            <Route
              path=""
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              {/* <Route path={`${location?.pathname}`} element={<DasBoardRight />} /> */}
              <Route path={`contest_dashboard`} element={<DasBoardRight />} />
              <Route path={`college_dashboard`} element={<CollegeBazzarDashboard />} />
              <Route path={`travel_dashboard`} element={<ViaggiooDashboardPage />} />
              <Route path={`lead_dashboard`} element={<DashboardLeadPage />} />
              <Route path={`farm-dashboard`} element={<DairyDashboard />} />
              {/* <Route path={`Agriculture_dashboard`} element={<DashboardLeadPage />} /> */}
              <Route path="bank-master" element={<BankMasterP />} />
              <Route path="zoon_area" element={<ZoonArea />} />
              <Route path="add-bank" element={<AddBank />} />
              <Route path="update-bank/:id" element={<AddBank />} />
              <Route path="role-master" element={<RoleMasterPage />} />
              <Route path="add-role-master" element={<AddRoleMaster />} />
              <Route
                path="update-role-master/:id"
                element={<AddRoleMaster />}
              />

              <Route
                path="company-staff/welcome"
                element={<CompanyStaffPages />}
              />
              <Route
                path="add-company-staff/welcome"
                element={<AddCompanyStaff />}
              />
              <Route
                path="company-staff-permission"
                element={<MasterPages />}
              />
              <Route path="status-master" element={<StatusMasterPage />} />
              <Route path="add-status-master" element={<AddStatusMaster />} />
              <Route
                path="update-status-master/:id"
                element={<AddStatusMaster />}
              />
              <Route path="course-master" element={<ServiceMasterPage />} />
              <Route path="add-course-master" element={<AddServiceMaster />} />
              <Route
                path="update-course-master/:id"
                element={<AddServiceMaster />}
              />
              <Route
                path="stream-master"
                element={<ServiceCategoryMasterPage />}
              />
              <Route
                path="add-stream-category"
                element={<AddServiceCategoryMaster />}
              />
              <Route
                path="update-stream-category/:id"
                element={<AddServiceCategoryMaster />}
              />
              <Route path="boardcast" element={<BoardcastPage />} />
              <Route
                path="payment-method"
                element={<PaymentMethodMasterPage />}
              />
              <Route path="add-payment-method" element={<AddPaymentMethod />} />
              <Route
                path="update-payment-method/:id"
                element={<AddPaymentMethod />}
              />
              <Route
                path="payout-beneficiary-master"
                element={<PayoutBeneficiaryMasterPage />}
              />
              <Route
                path="add-payout-beneficiary-master"
                element={<AddPayoutBeneficiaryMaster />}
              />
              <Route
                path="update-payout-beneficiary-master/:id"
                element={<AddPayoutBeneficiaryMaster />}
              />

              <Route path="area" element={<AreaPage />} />
              <Route path="add-area" element={<AddArea />} />
              <Route path="update-area/:id" element={<AddArea />} />
              <Route
                path="agent-onboarding-list"
                element={<AgentOnbordingPage />}
              />
              <Route path="country-zone" element={<CountryZoneMudle />} />
              <Route path="add-country-zone" element={<IndexZone />} />


              <Route
                path="add-agent-onboarding"
                element={<AddAgentOnbording />}
              />
              <Route
                path="update-agent-onboarding/:id"
                element={<AddAgentOnbording />}
              />
              <Route path="provider" element={<Provider />} />
              <Route path="add-provider" element={<AddProvider />} />
              <Route path="update-provider/:id" element={<AddProvider />} />
              <Route path="add-provider-logo" element={<AddproviderLogo />} />
              <Route path="update-provider-logo" element={<UpdateProvider />} />
              <Route path="api-master" element={<ApiMasterPage />} />
              <Route path="add-api-master" element={<AddApiMaster />} />
              <Route path="update-api-master/:id" element={<AddApiMaster />} />
              <Route
                path="api-transaction-master"
                element={<ApiTransitionMasterPage />}
              />
              <Route
                path="denomination-wise-api"
                element={<DominationWiseMasterPage />}
              />
              <Route
                path="add-denomination-wise-api"
                element={<AddDominationWiseMaster />}
              />
              <Route
                path="update-denomination-wise-api"
                element={<UpdateDonimationWiseMaster />}
              />
              <Route
                path="number-series-master"
                element={<NumberSeriesMasterPage />}
              />
              <Route
                path="add-number-series-master"
                element={<AddNumberSeriesMaster />}
              />
              <Route
                path="update-number-series-master"
                element={<UpdateNumberSeriesMaster />}
              />
              <Route path="state-wise-api" element={<StateWiseApiPage />} />
              <Route
                path="state-provider-settings"
                element={<StateWiseProviderSetting />}
              />
              <Route
                path="backup-api-master"
                element={<BackupApiMasterPage />}
              />
              <Route
                path="add-backup-api-master"
                element={<AddBackupApiMaster />}
              />
              <Route
                path="update-backup-api-master"
                element={<UpdateBackupApiMaster />}
              />
              <Route path="api-switching" element={<ApiSwitchingPage />} />
              <Route
                path="user-operator-limit"
                element={<UserOperatorLimitPage />}
              />
              <Route
                path="view-operator-limit"
                element={<ViewOperatorLimit />}
              />
              <Route
                path="vandor/payment/welcome"
                element={<ApiVandorPaymentPage />}
              />
              <Route
                path="site-setting/welcome"
                element={<SiteSettingPage />}
              />
              <Route
                path="sms-templete/welcome"
                element={<SmsSettingsPage />}
              />
              <Route
                path="package-settings"
                element={<PackageSettingsPage />}
              />
              <Route path="commission-setup" element={<CommissionSetup />} />
              <Route
                path="set-operator-commission"
                element={<SetOperatorSettings />}
              />
              <Route path="bank-settings" element={<BankSettingsPage />} />
              <Route path="user" element={<Customer />} />
              <Route path="user/add-user" element={<AddUsers />} />
              <Route path="update-user/:id" element={<AddUsers />} />
              <Route path="user-type" element={<UsersType />} />
              <Route path="add/user-type" element={<AddUsertType />} />
              <Route path="update/user-type/:id" element={<AddUsertType />} />
              <Route path="add-bank-settings" element={<AddBankSettings />} />
              <Route
                path="update-bank-settings"
                element={<UpdateBankSettings />}
              />
              <Route path="logo-upload" element={<LogoUploadPage />} />
              <Route
                path="signature-upload"
                element={<SignatureUploadPage />}
              />
              <Route path="service-banner" element={<ServiceBannerPage />} />
              <Route
                path="notification/welcome"
                element={<NotificationSettingsPage />}
              />
              <Route
                path="change-pin"
                element={<ChangePinPage />}
              />

              <Route
                path="charges-settings/welcome"
                element={<ChargesSettingsPage />}
              />
              <Route
                path="change-password"
                element={<ChangePasswordPage />}
              />
              <Route path="dynemic-page" element={<DynemicPage />} />
              <Route path="front-banner" element={<FrontBannerPage />} />
              <Route
                path="user-pannel-slider"
                element={<UserPannelSliderPage />}
              />
              <Route
                path="user-pannel-slider"
                element={<UserPannelSliderPage />}
              />

              <Route
                path="member-list/:id/:name"
                element={<DistributerPage />}
              />


              <Route
                path="/admin/create-user/:id"
                element={<CreateUserDistributerPage />}
              />
              <Route
                path="/admin/detail-lead/:id"
                element={<LeadDetail />}
              />

              <Route path="member/profile/view/:id" element={<ViewProfileMemberPage />} />
              <Route path="report/pancard/:id" element={<UtiPancardPage />} />
              <Route path="suspended-users" element={<SuspendedUserPage />} />
              <Route
                path="add-suspended-users"
                element={<AddSuspendedUser />}
              />
              <Route
                path="not-working-users"
                element={<NotWorkingUserPage />}
              />
              <Route
                path="add-not-working-user"
                element={<AddNotWorkingUserList />}
              />

              <Route
                path="add-transaction-report"
                element={<AddTransactionReport />}
              />

              <Route
                path="pending-transaction-report"
                element={<PendingTransactionReport />}
              />
              <Route
                path="add-pending-transaction-report"
                element={<AddPendingTransactionReport />}
              />

              <Route
                path="operator-wise-sale"
                element={<OperatorWiseSalePage />}
              />
              <Route
                path="add-operator-wise-sale"
                element={<AddOperatorWiseReport />}
              />
              <Route
                path="balance-trasnfer"
                element={<BalanceTransferPage />}
              />
              <Route
                path="add-balance-trasnfer"
                element={<BalanceTransferAdd />}
              />
              <Route
                path="update-balance-trasnfer"
                element={<UpdateBlanceTransfer />}
              />
              <Route
                path="update-pending-dispute"
                element={<UpdatePendingDisput />}
              />
              <Route path="solve-dispute" element={<SolveDisputePage />} />
              <Route path="add-solve-dispute" element={<AddSolveDispute />} />
              <Route
                path="update-solve-dispute"
                element={<UpdateSolveDispute />}
              />
              <Route
                path="add/distributor/income"
                element={<AddDistributerInc />}
              />
              <Route
                path="user-income/retailer"
                element={<RetailerIncomePage />}
              />
              <Route path="add/retailer/income" element={<AddRetailerInc />} />
              <Route path="income/my-income" element={<MyIncomePage />} />
              <Route path="add-debit-report" element={<AddDebitReport />} />
              <Route path="add-credit-report" element={<AddCreditReport />} />
              <Route path="contact-enquiry" element={<ContactInquery />} />
              <Route
                path="add-contact-enquiry"
                element={<AddContactEnquiry />}
              />
              <Route
                path="update-contact-enquiry/:id"
                element={<AddContactEnquiry />}
              />
              <Route
                path="cashfree-gateway-master"
                element={<CashfreeGateWayMasterPages />}
              />
              <Route
                path="add-cashfree-gateway-master"
                element={<AddCashFreeGateway />}
              />
              <Route
                path="whatapp/send-role-wise"
                element={<SendRoleWisepage />}
              />
              <Route path="company-setting" element={<CompanySettings />} />
              <Route path="currency" element={<CurrencyPage />} />
              <Route path="add-currency" element={<CurrencyForm />} />
              <Route path="update-currency/:id" element={<CurrencyForm />} />
              <Route path="country" element={<CountryPage />} />
              <Route path="add-country" element={<CountryForm />} />
              <Route path="update-country/:id" element={<CountryForm />} />
              <Route path="language" element={<LanguagePage />} />
              <Route path="satff" element={<StaffPage />} />
              <Route path="add-satff" element={<StaffForm />} />
              <Route path="update-satff/:id" element={<StaffForm />} />
              <Route path="staff-type" element={<StaffTypePage />} />
              <Route path="staff-type-add" element={<StaffTypeAdd />} />
              <Route path="staff-type-update/:id" element={<StaffTypeAdd />} />
              <Route path="add-language" element={<FormLanguage />} />
              <Route path="update_language/:id" element={<FormLanguage />} />
              <Route path="state-master" element={<StateMasterPage />} />
              <Route path="add-state-master" element={<FormStateMaster />} />
              <Route
                path="update-state-master/:id"
                element={<FormStateMaster />}
              />
              <Route
                path="service-area-permision"
                element={<ServiceAreaPermissionPage />}
              />
              <Route
                path="add-service-area-permision"
                element={<FormServicePermission />}
              />
              <Route
                path="package-master"
                element={<PackageMasterPage />}
              />

              <Route
                path="Package-Sales-Report"
                element={<PackageSaleReplort />}
              />
              <Route
                path="add-package"
                element={<AddPackegs />}
              />
              <Route
                path="add-package/:id"
                element={<EditPackegs />}
              />
              <Route
                path="department-master"
                element={<DepartmentMasterPage />}
              />
              <Route
                path="add-department-master"
                element={<AddDepartmentMaster />}
              />


              <Route
                path="update-department-master/:id"
                element={<AddDepartmentMaster />}
              />


              <Route path="profile" element={<Profile />} />
              <Route
                path="/statement/report/:id"
                element={<Statement />}
              />
              <Route
                path="/statementwallet/report/:id"
                element={<StatementWallet />}
              />
              <Route
                path="/statement/apes/report/:id"
                element={<Transactions />}
              />
              <Route
                path="/add-tickets"
                element={<TicketForm />}
              />
              <Route
                path="/staff-list"
                element={<ListStaffPermision />}
              />
              <Route
                path="/add-staff"
                element={<AddPermision />}
              />
              <Route
                path="/update-staff/:id"
                element={<AddPermision />}
              />
              <Route
                path="/building-master"
                element={<BuildingMaster />}
              />
              <Route
                path="/building-master/:id"
                element={<BuildingMaster />}
              />
              <Route
                path="/block-master"
                element={<BlockMaster />}
              />
              <Route
                path="/block-master/:id"
                element={<BlockMaster />}
              />
              <Route
                path="/area-master"
                element={<AreaPermision />}
              />
              <Route
                path="/area-master/:id"
                element={<AreaPermision />}
              />
              <Route
                path="/floor-master"
                element={<FloorPermission />}
              />
              <Route
                path="/floor-master/:id"
                element={<FloorPermission />}
              />
              <Route
                path="/ward-master"
                element={<WardMaster />}
              />
              <Route
                path="/ward-master/:id"
                element={<WardMaster />}
              />
              <Route
                path="/office-master"
                element={<OfficeMaster />}
              />
              <Route
                path="/office-master/:id"
                element={<OfficeMaster />}
              />
              <Route
                path="/departments-master"
                element={<DepartmentMaster />}
              />
              <Route
                path="/departments-master/:id"
                element={<DepartmentMaster />}
              />
              <Route
                path="/designation-master"
                element={<DesignationMaster />}
              />
              <Route
                path="/designation-master/:id"
                element={<DesignationMaster />}
              />
              <Route
                path="/staff-kyc_details"
                element={<StaffKycMaster />}
              />
              <Route
                path="/staff-kyc_details/:id"
                element={<StaffKycDetailsMasterByid />}
              />

              {/* ----------mustafa routes ------ */}
              <Route
                path="/add-main-module"
                element={<AddMainModulePage />}
              />
              <Route
                path="/update-main-module/:id"
                element={<AddMainModulePage />}
              />
              <Route
                path="/listMainModule"
                element={<MainListModule />}
              />

              <Route
                path="/add-sub-module"
                element={<AddSubModule />}
              />

              <Route
                path="/update-sub-module/:id"
                element={<AddSubModule />}
              />
              <Route
                path="/list-sub-module"
                element={<MainSubListModule />}
              />
              <Route
                path="/add-sub-sub-module"
                element={<FormSubSubModule />}
              />
              <Route
                path="/update-sub-sub-module/:id"
                element={<FormSubSubModule />}
              />
              <Route
                path="/list-sub-sub-module"
                element={<MainSubSubModule />}
              />
              <Route
                path="/add-role"
                element={<AddRole />}
              />
              <Route
                path="/list-role"
                element={<ListMainRole />}
              />
              <Route
                path="/update-role/:id"
                element={<AddRole />}
              />
              {/* Create-Complaint */}

              <Route
                path="/employees-complaints-dashboard"
                element={<ComplaintsDashboardPages />}
              />

              <Route
                path="/Create-Complaint"
                element={<AddCompalnePage />}
              />
              <Route
                path="/update-Complaint/:id"
                element={<AddCompalnePage />}
              />
              <Route
                path="/list-Complaint"
                element={<MainListComplane />}
              />


              {/* --------------Colleges Bazzar path Routes----------------------- */}
              <Route
                path="/list-set-Attributes"
                element={<SetGroupAttributesPages />}
              />
              <Route
                path="/cities-master"
                element={<Cities />}
              />
              <Route
                path="/add-cities"
                element={<CityForm />}
              />
              <Route
                path="/update-city/:id"
                element={<CityForm />}
              />
              <Route
                path="/college_types"
                element={<CollegetypesPage />}
              />
              <Route
                path="/create-colleges"
                element={<CollegetypeForm />}
              />
              <Route
                path="/update-collage-type/:id"
                element={<CollegetypeForm />}
              />
              <Route
                path="/affilated-by"
                element={<AffilatedBy />}
              />
              <Route
                path="/company-master"
                element={<CompanyMasters />}
              />
              <Route
                path="/create_company-master"
                element={<CompanyFormMaster />}
              />
              <Route
                path="/update-company-master/:id"
                element={<CompanyFormMaster />}
              />
              <Route
                path="/company-type-master"
                element={<CompanyTypeMasters />}
              />
              <Route
                path="/create_company-type-master"
                element={<CompanyTypeMasterForm />}
              />
              <Route
                path="/update_company-type-master/:id"
                element={<CompanyTypeMasterForm />}
              />
              <Route
                path="/create-affilated-by"
                element={<AffilatedTypesForm />}
              />
              <Route
                path="/update-affilated-by/:id"
                element={<AffilatedTypesForm />}
              />
              <Route
                path="/credit-cards"
                element={<CreditCard />}
              />
              <Route
                path="/create-credit-card"
                element={<CreditCardMasterForm />}
              />
              <Route
                path="/update-credit-card/:id"
                element={<CreditCardMasterForm />}
              />
              <Route
                path="/facilities"
                element={<Facilities />}
              />
              <Route
                path="/create-facilities"
                element={<FacilitiesMasterForm />}
              />
              <Route
                path="/update-facilities/:id"
                element={<FacilitiesMasterForm />}
              />


              <Route
                path="/approval"
                element={<ApprovalMaster />}
              />
              <Route
                path="/create-approval"
                element={<ApprovalMasterForm />}
              />
              <Route
                path="/update-approval/:id"
                element={<ApprovalMasterForm />}
              />
              <Route
                path="/lead-status"
                element={<LeadStatusMaster />}
              />
              <Route
                path="/create-lead-status"
                element={<LeadStatusForm />}
              />
              <Route
                path="/update-lead-status/:id"
                element={<LeadStatusForm />}
              />
              <Route
                path="/lead-sub-status"
                element={<LeadSubStatusMaster />}
              />
              <Route
                path="/create-lead-sub-status"
                element={<LeadSubStatusForm />}
              />
              <Route
                path="/update-lead-sub-status/:id"
                element={<LeadSubStatusForm />}
              />
              <Route
                path="/lead-source"
                element={<LeadSourceMasterPage />}
              />
              <Route
                path="/create-lead-source"
                element={<LeadSourceMasterForm />}
              />
              <Route
                path="/update-lead-source/:id"
                element={<LeadSourceMasterForm />}
              />
              <Route
                path="/list-colleges"
                element={<CollagesData />}
              />
              <Route
                path="/add-colleges"
                element={<CollagesFormData />}
              />
              <Route
                path="/update-college/:id"
                element={<CollagesFormData />}
              />
              <Route
                path="/gallery"
                element={<GalleryDatas />}
              />
              <Route
                path="/create-gallery"
                element={<PhotoGalleryMasterForm />}
              />
              <Route
                path="/update-gallery/:id"
                element={<PhotoGalleryMasterForm />}
              />

              {/* afterdelete Routes  */}
              <Route
                path="disputes/welcome"
                element={<DmtDisputesPage />}
              />
              <Route
                path="dmt-status/welcome"
                element={<DmtStatusPage />}
              />
              <Route
                path="priority-master/welcome"
                element={<PriorityPages />}
              />
              <Route
                path="add-priority-master/welcome"
                element={<PriorityMasterForm />}
              />
              <Route
                path="update-priority-master/:id/welcome"
                element={<PriorityMasterForm />}
              />
              <Route
                path="add-dmt-status/welcome"
                element={<DmtStatusForm />}
              />
              <Route
                path="update-dmt-status/welcome/:id"
                element={<DmtStatusForm />}
              />
              <Route
                path="move-member"
                element={<MoveMember />}
              />
              <Route
                path="upgrade-member"
                element={<UpgradeMember />}
              />
              {/* -------------------------------------- */}

              <Route
                path="course-degree-list"
                element={<Coursedegree />}
              />
              <Route
                path="add-course-degree-type"
                element={<CourceDegreeTypeForm />}
              />
              <Route
                path="update-course-degree-type/:id"
                element={<CourceDegreeTypeForm />}
              />
              <Route
                path="mail-settings"
                element={<EmailSettings />}
              />
              <Route
                path="create-camping-mess"
                element={<CreateCampingMessages />}
              />
              <Route
                path="utility-manager"
                element={<UtilityManager />}
              />
              <Route
                path="messages/manage-reports"
                element={<ManageReports />}
              />
              <Route
                path="payment-request-view"
                element={<PaymentRequestViewPage />}
              />
              {/* <Route
                path="/admin/wallet/virtual-wallet"
                element={<WallRep />}
              /> */}
              <Route
                path="/admin/wallet/add/virtual-wallet"
                element={<AddUpdateVirtualWall />}
              />
              {/* mustafa Routes -------------------- */}
              <Route path="number-list" element={<ListnumberWhatsaap />} />
              <Route path='add-numbers' element={<AddNumber />} />
              <Route path='team-inbox' element={<SharedTeamWhatsapp name="Mustafa Ashraf" message="Hello" />} />
              <Route path='agent_List' element={<AgentList />} />
              <Route path='create-agent' element={<CreateAgent />} />
              <Route path='chat' element={<SharedTeamWhatsapp name="Anshika Kumari" message="Hello" />} />
              {/* -----------------junaid"s Route Start--------- */}
              <Route path="add-testimonial" element={<CreateTestimonial />} />
              <Route path="edit-testimonial/:id" element={<CreateTestimonial />} />
              <Route path="list-testimonial" element={<Testimoniallist />} />

              <Route path="add-vedio" element={<CreateVedio />} />
              <Route path="edit-vedio/:id" element={<CreateVedio />} />
              <Route path="vedio-master" element={<VedioList />} />

              <Route path="add-blog-category" element={<BLogCategoryAdd />} />
              <Route path="edit-blog-category/:id" element={<BLogCategoryAdd />} />
              <Route path="blog-category" element={<BlogCategoryList />} />

              <Route path="add-blog" element={<BLogAdd />} />
              <Route path="edit-blog/:id" element={<BLogAdd />} />
              <Route path="blog-list" element={<BlogList />} />

              <Route path="add-partner" element={<PartnerAdd />} />
              <Route path="edit-partner/:id" element={<PartnerAdd />} />
              <Route path="partner-list" element={<PartnerList />} />

              <Route path="about-us-master" element={<AboutUs />} />
              <Route path="contact-us-master" element={<ContactUs />} />
              <Route path="privacy-policy-master" element={<PrivacyAndPolicy />} />

              <Route path="return-policy-master" element={<ReturnPolicy />} />
              <Route path="terms-condition-master" element={<TermsCondition />} />

              <Route path="add-faq" element={<FAQAdd />} />
              <Route path="edit-faq/:id" element={<FAQAdd />} />
              <Route path="faq-master" element={<FaqList />} />


              <Route path="whatsaap-master" element={<WhatsaapMaster />} />

              <Route path="utility-master" element={<WhatsAppManager />}>
                <Route path="" element={<ListUtility />} />
                <Route path="add-wa-templates" element={<NewTemplateForm />} />
                <Route path="optin-management" element={<OptinManageMent />} />
                <Route path="whatsapp-blocklist" element={<WaBlockNumber />} />
              </Route>
              <Route path="All-Withdrawals" element={<Withdrawals title={'All-Withdrawals'} api='' />} />
              <Route path="Pending-Withdrawals/Pending-Withdrawals" element={<Withdrawals title={'Pending Withdrawals'} api='Pending' />} />
              <Route path="Rejected-Withdrawals/Rejected-Withdrawals" element={<Withdrawals title={'Rejected-Withdrawals'} api='Rejected' />} />
              <Route path="Approved-Withdrawals/Approved-Withdrawals" element={<Withdrawals title={'Approved-Withdrawals'} api='Approved' />} />
              <Route path="wallet_report" element={<Walletreport />} />

              <Route path="building-list" element={<BuildingsMaster />} />
              <Route path="building-add" element={<BuildAdd />} />
              <Route path="building-add/:id" element={<BuildAdd />} />

              <Route path="Floor-List" element={<FloorMaster />} />
              <Route path="Floor-Add" element={<FloorAdd />} />
              <Route path="Floor-Add/:id" element={<FloorAdd />} />
              <Route path="wa-report-download" element={<WhatsAppReports />} />
              <Route path="add-template-type" element={<TemplateTypeAdd />} />
              <Route path="edit-template-type/:id" element={<TemplateTypeAdd />} />
              <Route path="template-type" element={<TableTemplate />} />

              <Route path="add-template-category" element={<TemplateCategoryAdd />} />
              <Route path="edit-template-category/:id" element={<TemplateCategoryAdd />} />
              <Route path="template-category" element={<TemplateCategoryList />} />

              <Route path="add-flow-builder" element={<FlowBuilderAdd />} />
              <Route path="edit-flow-builder/:id" element={<FlowBuilderAdd />} />
              <Route path="flow-builder" element={<FlowBuilder />} />

              <Route path="/admin/create-lead" element={<CreateLead />} />
              <Route path="Create-Call" element={<CreateCall />} />
              <Route path="List-Call" element={<CallList />} />
              <Route path="Create-Enquiry" element={<CreateEnquiry />} />
              <Route path="List-Enquiry" element={<EnquiryList />} />


              <Route path="add-lead_Type" element={<LeadTypeAdd />} />
              <Route path="edit-lead_Type/:id" element={<LeadTypeAdd />} />
              <Route path="lead_Type" element={<LeadTypeList />} />


              <Route path="call-status-masters" element={<CallStatusMasters />} />
              <Route path="create-call-status" element={<CreateCallForm />} />
              <Route path="create-call-status/:id" element={<CreateCallForm />} />


              <Route path="convert-status" element={<ConvertStatus />} />
              <Route path="create-convert-status" element={<CreateConvertForm />} />
              <Route path="create-convert-status/:id" element={<CreateConvertForm />} />


              <Route path="call-source" element={<ConvertCallSource />} />
              <Route path="create-convert-call-source" element={<CreateConvertCallForm />} />
              <Route path="create-convert-call-source/:id" element={<CreateConvertCallForm />} />


              <Route path="add-cattle" element={<CattleAdd />} />
              <Route path="edit-cattle/:id" element={<CattleAdd />} />
              <Route path="cattle" element={<CattleList />} />
              <Route path="cattle-variant" element={<CattleVareiant />} />
              <Route path="live-stock-variant" element={<LiveStockVarriant />} />
              <Route path="purchase" element={<BuyList />} />
              <Route path="purchase/add-new-purchase" element={<Addnewpurchase />} />
              <Route path="purchase/assign-to-shed" element={<AssignToShed />} />




              <Route path="contest-type" element={<ContestTypeMaster />} />
              <Route path="create-contest-type" element={<CreateType />} />
              <Route path="create-contest-type/:id" element={<CreateType />} />

              <Route path="market-type" element={<MarketTypeMaster />} />
              <Route path="create-market-type" element={<CreateTypemarket />} />
              <Route path="create-market-type/:id" element={<CreateTypemarket />} />

              <Route path="default-contest" element={<DefoultContestMaster />} />
              <Route path="create-default-contest" element={<DefultCreateContext />} />
              <Route path="create-default-contest/:id" element={<DefultCreateContext />} />

              <Route path="contest" element={<ContestMaster />} />
              <Route path="create-contest" element={<CreateContext />} />
              <Route path="create-contest/:id" element={<CreateContext />} />

              <Route path="banner-master" element={<BannerMaster />} />
              <Route path="create-banner" element={<CreateBanner />} />
              <Route path="create-banner/:id" element={<CreateBanner />} />

              <Route path="list-prize-distribution" element={<PriceDistPage />} />
              <Route path="add-prize-distribution" element={<CreateadDistribution />} />
              <Route path="add-prize-distribution/:id" element={<CreateadDistribution />} />

              <Route path="Pipeline-List" element={<PipeLinePage />} />
              <Route path="Add-Pipeline" element={<AddPipeline />} />
              <Route path="Add-Pipeline/:id" element={<AddPipeline />} />

              <Route path="All-Contest" element={<DyenmicContest title='All Contest List' />} />
              <Route path="Live-Contest/1" element={<DyenmicContest title='Live Contest List' />} />
              <Route path="Drown-Contest/2" element={<DyenmicContest title='Drown Contest List' />} />


              <Route path="seo-configration" element={<SeoConfigration />} />
              <Route path="manegment-pages" element={<ManagementPages />} />
              <Route path="solcial-login" element={<SocialLoginCredentials />} />
              <Route path="corn-jobs" element={<CornJobs />} />

              {/* <Route path="corn-Schedules" element={<CornScheduel/>} /> */}

              <Route path="deal-list" element={<DealMaster />} />
              <Route path="deal-create" element={<CreateDeal />} />
              <Route path="deal-create/:id" element={<CreateDeal />} />

              <Route path="system-settings" element={<SystemSettings />} />
              <Route path="gateway/automatic" element={<PaymentGateway />} />
              <Route path="general-settings" element={<GeneralSettings />} />
              <Route path="system-configration" element={<SystemConfiguration />} />
              <Route path="send-email" element={<SendEmail />} />
              <Route path="mail-setings" element={<MailSeting />} />
              <Route path="mail-templates" element={<EmailTemplet />} />

              <Route path="sitemap/build" element={<SiteMap />} />
              <Route path="category" element={<HomePageCategories />} />
              <Route path="miscellaneous" element={<Miscellaneous />} />
              <Route path="manage-addons" element={<ManageAddons />} />
              <Route path="shop-addons" element={<ShopAddons />} />
              <Route path="cron-job" element={<CronJobViewer />} />

              <Route path="error-log-viewer" element={<ErrorLogViewer />} />
              <Route path="php-info-viewer" element={<PhpViewer />} />
              <Route path="database-backup" element={<DataBaseBackup />} />




              <Route path="declared_winners" element={<DeclaredWinnersPage />} />
              <Route path="users/active" element={<ManageUsersPage />} />
              <Route path="users/detail" element={<UserDetails />} />
              <Route path="users/banned" element={<ManageUsersPage />} />
              <Route path="users/email-unverified" element={<ManageUsersPage />} />
              <Route path="users/mobile-unverified" element={<ManageUsersPage />} />
              <Route path="users/with-balance" element={<ManageUsersPage />} />
              <Route path="users" element={<ManageUsersPage />} />
              <Route path="deposit/pending" element={<PaymentsPage />} />
              <Route path="deposit/approved" element={<PaymentsPage />} />
              <Route path="deposit/details" element={<PaymentsDetails />} />
              <Route path="deposit/successful" element={<PaymentsPage />} />
              <Route path="deposit/rejected" element={<PaymentsPage />} />
              <Route path="deposit/initiated" element={<PaymentsPage />} />
              <Route path="deposit/all" element={<PaymentsPage />} />
              <Route path="report/transaction" element={<TransactionHistoryPage />} />
              <Route path="report/login/history" element={<LoginHistoryPage />} />
              <Route path="report/notification/history" element={<NotificationHistoryPage />} />

              <Route path="collect-milk" element={<CollectMilkPage />} />
              <Route path="add-collect-milk" element={<CollectMilkAdd />} />
              <Route path="sale-milk" element={<SaleMilkPage />} />
              <Route path="add-sale-milk" element={<AddSaleMilk />} />
              <Route path="sale-milk-invoice" element={<SaleMilkInvoice />} />
              <Route path="sale-milk-due-collection" element={<SaleDueCollectionPage />} />
              <Route path="contest_participate" element={<ContestParticipate />} />
              <Route path="company_details" element={<CompanyDetail />} />
              <Route path="cow-monitor" element={<RoutineMonitorPage />} />
              <Route path="cow-monitor/create" element={<AddRoutineMonitor />} />
              <Route path="vaccine-monitor" element={<VaccineMonitorPage />} />
              <Route path="vaccine-monitor/create" element={<AddVaccineMonitor />} />
              <Route path="animal-pregnancy" element={<AnimalPregnancyPage />} />
              <Route path="sale-cow" element={<SaleListPage />} />
              <Route path="add-sale-cow" element={<CowSaleAdd />} />
              <Route path="sale-invoice-cow" element={<SaleInvoice />} />
              <Route path="sale-due-collection" element={<SaleDueCollectionnPage />} />
              <Route path="expense-list" element={<ExpenseListPage />} />

              <Route path="expense-purpose" element={<ExpensePurposePage />} />
              <Route path="add-new-expense-purpose" element={<AddNewPurpose />} />
              <Route path="supplier" element={<SuppliersPage />} />
              <Route path="supplier/create" element={<AddSuplierProfile />} />
              <Route path="sheds" element={<ManageStallPage />} />
              <Route path="add-new-stall" element={<ManageStallAdd />} />
              <Route path="branch" element={<BranchPage />} />
              <Route path="add-branch" element={<AddBranch />} />
              <Route path="designation" element={<DesignationPage />} />
              <Route path="add-designation" element={<AddDesination />} />
              <Route path="colors" element={<ColorrPage />} />
              <Route path="add-colors" element={<AddNewColor />} />
              <Route path="animal-type" element={<AnimalTypePage />} />
              <Route path="add-animal-type" element={<AddNewAnimalType />} />
              <Route path="monitoring-service" element={<MonitoringServicesPage />} />
              <Route path="add-monitoring-service" element={<MonitoringServicesAdd />} />
              <Route path="food-item" element={<FoodItemPage />} />
              <Route path="add-food-item" element={<AddFoodItem />} />
              <Route path="food-unit" element={<FoodUnitPage />} />
              <Route path="add-food-unit" element={<AddFoodItem />} />
              <Route path="vaccine-list" element={<VactionList />} />
              <Route path="add-vaccine" element={<AddVaccine />} />
              <Route path="get-vaccine-wise-monitoring-report" element={<GetWiseReportsetPage />} />
              <Route path="estimate_request" element={<Estimate_requestPage />} />
              <Route path="add_estimate_request" element={<Add_estimate_request />} />
              <Route path="delivery-challan" element={<DeliveryChallanPage />} />
              <Route path="add-pdelivery-challan" element={<DeliveryChallanAdd />} />
              <Route path="details-pdelivery-challan" element={<DeliveryChallanDetails />} />
              <Route path="electronics-dashboard" element={<ElectronicsDashboardPage />} />
              <Route path="sales-Invoice-for-Update" element={<SalesInvoiceforUpdatePage />} />
              <Route path="add-sales-Invoice-for-Update" element={<SalesInvoiceforAdd />} />
              <Route path="retail-price-pending-for-approval" element={<RetailPricePendingforApprovalPage />} />
              <Route path="distributor-credit-control" element={<DistributorCreditControlPage />} />
              <Route path="crm-electronic" element={<CrmElectronicPage />} />
              <Route path="crm-electronic-add" element={<CrmElectronicAdd />} />
              <Route path="crm-electronic-details" element={<CrmElectronicDetails />} />
              <Route path="leave-application" element={<LeaveApplicationPage />} />
              <Route path="leave-application-add" element={<LeaveApplicationAdd />} />
              <Route path="close-pending-dc-manually" element={<ClosePendingDCManuallyPage />} />
              <Route path="close-pending-dc-manually-add" element={<ClosePendingDCManuallyAdd />} />
              <Route path="crm-distribution-collection" element={<CrmDistributionCollectionPage />} />
              <Route path="crm-distribution-collection-add" element={<CrmDistributionCollectionAdd />} />
              <Route path="crm-distribution-sales" element={<CrmDistributionSalesPage />} />
              <Route path="crm-distribution-sales-add" element={<CrmDistributionSalesAdd />} />
              <Route path="stock-journal-Outward" element={<StockJournalOutwardPage />} />
              <Route path="stock-journal-Outward-add" element={<StockJournalOutwardAdd />} />
              <Route path="vehicle-loading-sheet" element={<VehicleLoadingSheetPage />} />
              <Route path="vehicle-loading-sheet-add" element={<VehicleLoadingSheetAdd />} />
              <Route path="vehicle-loading-sheet-deatils" element={<VehicleLoadingSheetDeatils />} />
              <Route path="return-management" element={<ReturnManagementPage />} />
              <Route path="warehouse-stock-transfer" element={<WarehouseStocktransferPage />} />
              <Route path="warehouse-stock-transfer-add" element={<WarehouseStocktransferAdd />} />
              <Route path="ledger-report" element={<LedgerReportsPage heading={'Ledger Report'} />} />
              <Route path="ledger-report-running-bal" element={<LedgerReportsPage heading={'Ledger Report Running Bal'} />} />
              <Route path="cash-book" element={<LedgerReportsPage heading={'Cash Book'} />} />
              <Route path="ledger-report-detailed" element={<LedgerReportsPage heading={'Ledger Report Detailed'} />} />
              <Route path="taluka-wise-dealer-list" element={<TalukaWiseDealerListPage />} />
              <Route path="group-summary" element={<GroupSummaryPage />} />

              <Route path="bankpayment/list" element={<BankPaymentPage heading={'Bank Payment'} apiPass={'bank payment'} />} />
              <Route path="bankpayment/add/:name" element={<AddBankPayment />} />
              <Route path="bankpayment/update/:name/:id" element={<AddBankPayment />} />
              <Route path="bankreceipt/list" element={<BankPaymentPage heading={'Bank Receipt'} apiPass={'bank receipt'} />} />

              <Route path="cashreceipt/list" element={<BankPaymentPage heading={'Cash Receipt'} apiPass={'cash receipt'} />} />

              <Route path="cashpayment/list" element={<BankPaymentPage heading={'Cash Payment'} apiPass={'cash payment'} />} />
              <Route path="contra/list" element={<ContraPage />} />
              <Route path="contra/Add" element={<ContraAdd />} />
              <Route path="gstexpenseentry/list" element={<GSTExpenseEntryPage />} />
              <Route path="gstexpenseentry/add" element={<GSTExpenseEntryAdd />} />
              <Route path="gstrcmentry/list" element={<RcmEntryPage />} />
              <Route path="gstrcmentry/add" element={<RcmEntryAdd />} />
              <Route path="gstincome/list" element={<GSTIncomePage />} />
              <Route path="gstincome/add" element={<GSTIncomeAdd />} />
              <Route path="gstutilization/list" element={<GSTUtilizationPage />} />
              <Route path="gstutilization/add" element={<GSTUtilizationAdd />} />
              <Route path="gstpayment/list" element={<GstPaymentPage />} />
              <Route path="gstpayment/add" element={<GSTPaymentAdd />} />
              <Route path="gstjournal/list" element={<GSTJournalPage />} />
              <Route path="gstjournal/add" element={<GSTJournalAdd />} />
              <Route path="cnentrywostock/list" element={<EntryCnStocksPage />} />
              <Route path="cnentrywostock/add" element={<EntryCnStocksAdd />} />
              <Route path="dnentrywostock/list" element={<EntryDnStocksPage />} />
              <Route path="dnentrywostock/add" element={<EntryDnStocksAdd />} />
              <Route path="cnentrywithstock/list" element={<CNEntrywithStockPage />} />
              <Route path="cnentrywithstock/add" element={<CNEntrywithStockAdd />} />
              <Route path="dnentrywithstock/list" element={<DNEntrywithStockPage />} />
              <Route path="dnentrywithstock/add" element={<DNEntrywithStockAdd />} />
              <Route path="quotation/list" element={<QuatationPage />} />
              <Route path="quotation/add" element={<QuatationAdd />} />
              <Route path="purchasequotation/list" element={<PurchaseQuatationPage />} />
              <Route path="purchasequotation/add" element={<PurchaseQuatationAdd />} />
              <Route path="salesorder/list" element={<SalesOrderPage />} />
              <Route path="salesorder/add" element={<SalseOrderAdd />} />
              <Route path="purchaseorder/list" element={<PurchageOrderPage />} />
              <Route path="purchaseorder/Add" element={<PurchageOrderAdd />} />
              <Route path="salesorderfrm/list" element={<OrderFromQuationPage />} />
              <Route path="salesorderfrm/Add" element={<OrderFromQuationAdd />} />
              <Route path="purchaseorderfrm/list" element={<PurchaseOrderFromQuotationPage />} />
              <Route path="purchaseorderfrm/add" element={<PurchaseOrderFromQuotationAdd />} />
              <Route path="saleschallan/list" element={<SalesChallanPage />} />
              <Route path="saleschallan/add" element={<SalesChallanAdd />} />
              <Route path="purchasechallan/list" element={<PurchaseChallanPage />} />
              <Route path="purchasechallan/add" element={<PurchaseChallanAdd />} />
              <Route path="saleschallanfrm/list" element={<SalesFromOrderPage />} />
              <Route path="saleschallanfrm/add" element={<SalesFromOrderAdd />} />
              <Route path="purchasechallanfrm/list" element={<PurchangefromChalanPage />} />
              <Route path="purchasechallanfrm/add" element={<PurchangefromChalanAdd />} />
              <Route path="challanreturn/list" element={<ChallanReturnPage />} />
              <Route path="challanreturn/add" element={<ChallanReturnAdd />} />
              <Route path="stocktransfer/list" element={<StocksTrasferPage />} />
              <Route path="stocktransfer/add" element={<StockTransferAdd />} />

              <Route path="production/list" element={<ProductionEntryPage />} />
              <Route path="production/add" element={<ProductionEntryAdd />} />
              <Route path="productionplanning" element={<ProductionPlaningPage />} />
              <Route path="productionplanning/add" element={<ProductionPlanningAdd />} />
              <Route path="productionissue/list" element={<ProductionIssuePage Heading={'List Of Production Issue'} />} />
              <Route path="productionissue/details" element={<ProductionIssueDetails Heading={'Production Issue Details'} />} />
              <Route path="productionreceipt/list" element={<ProductionIssuePage Heading={'List Of Production Receipt'} />} />

              <Route path="jobworkorder/list" element={<JobworkOutOrderPage />} />
              <Route path="jobworkorder/add" element={<JobworkOutOrderAdd />} />
              <Route path="jobworkissue/list" element={<JobworkOutIssuePage />} />
              <Route path="jobworkissue/add" element={<JobworkOutIssueAdd />} />
              <Route path="jobworkreceipt/list" element={<JobworkOutRecipetPage />} />
              <Route path="jobworkreceipt/add" element={<JobworkOutRecipetAdd />} />
              <Route path="bank-Payment-Quick" element={<BankPaymenttPage heading={'Bank Payment (Quick)'} />} />
              <Route path="bank-Receipt-Quick" element={<BankPaymenttPage heading={'Bank Receipt (Quick)'} />} />

              {/* -----------------Goatx Routes-------- */}
              <Route path="flight-booking-txn-list" element={<FlightRequestPages />} />
              <Route path="flight-amendments-list" element={<FlightAmbd />} />
              <Route path="flight-refunds-list" element={<FlightRefunds />} />
              <Route path="flight-Cancellation-request" element={<FlightCancel />} />
              <Route path="flight-booking-calendar" element={<FlightBookingCalender />} />
              <Route path="flight-group-request" element={<FlightGroupRequest />} />
              <Route path="offline-flight" element={<FlightOfline />} />
              <Route path="flight-markup" element={<FlightMarkUp />} />
              <Route path="flight-deal-dicount" element={<FlightDiscount />} />
              <Route path="flight-upload-ticket" element={<FlightUploadTicket />} />
              <Route path="hotel-amendments-list" element={<HoteltAmbd />} />
              <Route path="hotel-hold-queues" element={<HotelHoldQues />} />
              <Route path="hotels-markup" element={<HotelMarkup />} />
              <Route path="hotel-discounts" element={<HotelDiscount />} />
              <Route path="hotel-booking-list" element={<HotelBooking />} />
              <Route path="hotel-group-request" element={<HotelGroupRequest />} />
              <Route path="my-booking-hotel-calender" element={<HotelBCalender />} />
              <Route path="hotel-cancellations-request" element={<HotelCancel />} />
              <Route path="hotel-refunds-list" element={<HotelRefunds />} />
              <Route path="coupon/hotel-coupon" element={<HotelCoupon />} />
              <Route path="hotel-upload" element={<HotelVocherUpload />} />
              <Route path="bus-markup" element={<BusMarkup />} />
              <Route path="bus-amendments" element={<BusAmendments />} />
              <Route path="bus-booking-list" element={<BusBooking />} />
              <Route path="bus-cancellation-request" element={<BusCancel />} />
              <Route path="bus-refund" element={<BusRefunds />} />
              <Route path="bus-group-request" element={<BusGroupRequest />} />
              <Route path="bus-discount" element={<BusDiscount />} />
              <Route path="bus-upload" element={<BusUpload />} />
              <Route path="visa-markup" element={<VisaMarkup />} />
              <Route path="visa-discount" element={<VisaDiscount />} />
              <Route path="Visa-refunds-list" element={<VisaList />} />
              <Route path="visa-amendments-list" element={<VisaAmendmentsList />} />
              <Route path="visa-booking-list" element={<VisaBooking />} />
              <Route path="visa-setting-list" element={<VisaSetings />} />
              <Route path="visa-group-request-list" element={<VisaGroupReq />} />
              <Route path="visa-list" element={<VisaRList />} />
              <Route path="visa-list/add-visa" element={<VisaRForm />} />

              {/* ---------------------Junaid Goatx Routes----------------------- */}
              <Route path="Deposit-Request" element={<AccountManagement />} />
              <Route path="distributor-deposite-request" element={<DistributorRequest />} />
              <Route path="/flight-booking-txn-list/payment-remark" element={<RemarkPayment />} />
              <Route path="/viewInvoice" element={<RemarkPayment />} />
              <Route path="/flight-booking-txn-list/payment-remark/viewInvoice" element={<ViewInvoice />} />


              <Route path="balance-ledger" element={<BalanceLedger />} />
              <Route path="Vendor-Account-Logs" element={<VenderLogs />} />
              <Route path="api-management" element={<ApiManage />} />
              {/* <Route path="api-manage" element={<ApiOffOnManage />} /> */}

              <Route path="holiday-markup-list" element={<HolidayMarkup />} />
              <Route path="Holiday-Discount" element={<HolidayDIscount />} />
              <Route path="Holiday-List" element={<HolidayListPage />} />
              <Route path="Add-Holiday" element={<AddHoliday />} />


              <Route path="overall-report" element={<OverallReportPage />} />
              <Route path="visitors-log" element={<VisitorsLogPage />} />
              <Route path="recent-history" element={<RecentHistoryPage />} />
              <Route path="who-online" element={<OverviewPage />} />
              <Route path="analytics-overview" element={<WhoOnlinePage />} />
              <Route path="/dashboard/playNif50" element={<PlayNif50Page />} />
              <Route path="hourly-contest" element={<Nifty50HourlyContest />} />
              <Route path="select-palyers" element={<SelectPlayers />} />
              <Route path="select-stock" element={<SelectStock />} />


              {/* -----------------Goatx Routes-------- */}
              {/* -----------------shoib"s Route Start End-w-------- */}
              <Route path="notification/global/email" element={<NotificationSettings />} />
              <Route path="extensions" element={<Extension />} />
              <Route path="policy" element={<PolicyPages />} />
              <Route path="seoconfigration" element={<Seoconfigration />} />
              <Route path="maintenancemode" element={<MaintenanceMode />} />

              <Route path="create-a-pages" element={<CreatePages />} />
              <Route path="manage-pages" element={<CreatePageList />} />
              <Route path="create-a-link" element={<CreateLink />} />
              <Route path="gdpr-cookie" element={<GDPRCookies />} />
              <Route path="custom-css" element={<CustomCss />} />
              <Route path="sitemap-XML" element={<SiteMapXml />} />
              <Route path="robots-txt" element={<RobotsTxt />} />


              <Route path="cow-feed" element={<CowFeedPage />} />
              <Route path="add-cow-feed" element={<CowFeedAdd />} />
              <Route path="edit-cow-feed/:id" element={<CowFeedAdd />} />

              <Route path="manage-cow" element={<ManageCowPage />} />
              <Route path="add-manage-cow" element={<ManageFeed />} />
              <Route path="edit-manage-cow/:id" element={<ManageFeed />} />
              {/* -----------------shoib"s Route Start End-w-------- */}


              {/* ----------------------------vehicles-project routes ---------------------- */}
              {/* <Route path="vms/vehicle" element={<Vehicles />} /> */}
              {/* <Route path="vehicle/details" element={< />} /> */}

              <Route path="history_tracking" element={<HistoryTracking />} />
              <Route path="booking_report" element={<BookingRepoert />} />
              <Route path="add_geofence" element={<AddGeofence />} />
              <Route path="geofence_events" element={<GeofenceEvents />} />
              <Route path="geofence_management" element={<GeofenceManagement />} />
              <Route path="live_location" element={<LiveLocation />} />


              {/* <Route path="Nifty-Rate-List" element={<NiftyratePage />} /> */}
              <Route path="Nifty-Rate-add" element={<CreateNiftySale />} />
              <Route path="Nifty-Rate-add/:id" element={<CreateNiftySale />} />


              <Route path="Budget-Master" element={<BugetMaster />} />
              <Route path="Budget-add" element={<BugetForm />} />
              <Route path="Budget-add/:id" element={<BugetForm />} />


              {/* <Route path="Dummy-users-List" element={<DummyUsers />} /> */}
              <Route path="Dummy-users-add" element={<DummyForm />} />
              <Route path="Dummy-users-add/:id" element={<DummyForm />} />

              {/* Farms Reports Routs  */}
              <Route path="add-dairy-farm-management-system-reports" element={<OfficeExpenseReport />} />
              <Route path="dairy-farm-management-system/employee-salary-report" element={<EmployeeSalaryReport />} />
              <Route path="dairy-farm-management-system/milk-sale-report" element={<MilkSaleReport />} />
              <Route path="dairy-farm-management-system/milk-collect-report" element={<MilkCollectReport />} />
              <Route path="dairy-farm-management-system/vaccine-monitor-report" element={<VaccineMonitorReport />} />




              <Route path="proposal/list" element={<ProposalListPage />} />
              <Route path="proposal/create" element={<AddProposalPage />} />
              <Route path="contracts" element={<ContractsPage />} />
              <Route path="contract/create" element={<AddNewContractPage />} />

              <Route path="vehicle_list" element={<VehicleList />} />
              <Route path="vehicle-details" element={<VehicleDetails />} />
              <Route path="vehicle-group" element={<VehicleGroup />} />
              <Route path="add-vehicle" element={<AddVehicle />} />

              <Route path="tasks" element={<TasksListPage />} />
              <Route path="task/create/:id" element={<AddNewTaskPage />} />
              <Route path="task/overview" element={<TasksOverviewPage />} />
              <Route path="task_templates" element={<TaskTemplateListPage />} />
              <Route path="task_templates/create" element={<AddNewTaskTemplatePage />} />
              <Route path="task_from_templates/create" element={<AddNewTaskFromTemplatePage />} />

              <Route path="project" element={<Project />} />
              <Route path="project/newproject" element={<NewProject />} />

              {/* ---Daud's Route  ---static work----*/}

              <Route path="credit_notes" element={<CreditNotesPage />} />
              <Route path="credit_notes/new-credit_notes" element={<NewCreditNotes />} />
              <Route path="invoices" element={<InvoicesPage />} />
              {/* <Route
                path="invoices/create-new-invoice"
                element={<CreateNewInvoice />}
              /> */}


              {/* ---Expenses-- */}

              {/* <Route path="expense-list" element={<ExpenseListPage />} /> */}

              <Route path="expense-list/add-expense" element={<AddExpense />} />

              <Route
                path="expenses-subcategory"
                element={<ExpenseSubCategoryPage />}
              />
              <Route
                path="inward-list"
                element={<Inward />}
              />
              <Route
                path="create-inward"
                element={<InwardForm />}
              />
              <Route
                path="outward-list"
                element={<Onward />}
              />
              <Route
                path="create-outward"
                element={<OnwardForm />}
              />
              <Route
                path="inward-sku-master"
                element={<SkuMaster />}
              />
              <Route
                path="inward-add-sku-master"
                element={<FormSkuMaster />}
              />
              <Route
                path="transport-master"
                element={<TransportMaster />}
              />
              <Route
                path="add-transport-master"
                element={<FormTransportMaster />}
              />

              <Route path="cow-sale-report" element={<SaleList />} />
              <Route path="print-invoice" element={<PrintInvoice />} />

              <Route path="orderlist" element={<OrderList />} />
              <Route path="addneworder" element={<AddNewOrder />} />
              <Route path="bookinglist" element={<BookingList />} />
              <Route path="addnewbooking" element={<AddNewBooking />} />



              <Route path="purchase-&-Inward" element={<PurchaseInward />} />
              <Route path="billed-but-not-dispatched" element={<BillButnotDispatch />} />
              <Route path="return_management_reconcile" element={<ReturnManagementReconcile />} />
              <Route path="pendingdc" element={<Pendingdoc />} />
              <Route path="pending-inward" element={<PendingInward />} />
              <Route path="inward/outtward-register" element={<InwordOutwardRegister />} />
              <Route path="material-in-but-purchase-not-made" element={<Materialinbutpurch />} />
              <Route path="purchase-not-matched-with-Inward" element={<PurchaseNotmatched />} />
              <Route path="kng-sale-register-" element={<SalesRegisters />} />
              <Route path="kng-update-sale-register-" element={<UpdateSalesRegisterDetail />} />
              <Route path="kng-sale-register-with-exp" element={<SalesRegisterWithExpDetails />} />
              <Route path="kng-cn-entry-wn-stock-list" element={<CnEntryWnStocklist />} />
              <Route path="kng-purchase-register" element={<PurchaseRegister />} />
              <Route path="kng-update-purchase-register" element={<Purchaseregisterform />} />
              <Route path="kng-add-purchase-register" element={<Purchaseregisterform />} />
              <Route path="kng-stocksheet" element={<StockRegister />} />
              <Route path="kng-stocksheet/ledgerview" element={<ProductLedger />} />
              <Route path="kng-negative/stock" element={<NegativeSock />} />
              <Route path="kng-nstock/ledgerview" element={<ViewProductionForm />} />
              <Route path="kng-record/level" element={<RecordLevel />} />
              <Route path="kng-stock-statement-list" element={<StockStatement />} />
              <Route path="kng-batch-stock-list" element={<BatchStock />} />
              <Route path="kng-batch-stock-location-list" element={<BatchWithLocation />} />
              <Route path="kng-batch-expring-list" element={<Batchexpiring />} />
              <Route path="kng-location-wise-list" element={<LocationWiseStock />} />
              <Route path="kng-unused-serial-number-stock-list" element={<Unusedserialnostock />} />
              <Route path="kng-profit-register-list" element={<ProfitRegister />} />
              <Route path="kng-partywise-sale-purchase-list" element={<Partywisesalepurchase />} />
              <Route path="kng-product-wise-party-report-list" element={<Productwisepartyreport />} />
              <Route path="kng-party-cross-report-list" element={<Partycrossreports />} />
              <Route path="kng-sales-wise-report-list" element={<Saleswisereports />} />

              {/* atif routes */}
              <Route path="budgetlist" element={<Budget />} />
              <Route path="addnewbudget" element={<AddNewBudget />} />
              <Route path="costinglist" element={<Costing />} />
              <Route path="costingform" element={<CostingForm />} />
              <Route path="samplelist" element={<SimpleList />} />
              <Route path="addnewsample" element={<AddNewSimple />} />
              <Route path="shipment" element={<ShipmentList />} />
              <Route path="newshipment" element={<AddNewShipment />} />
              <Route path="productlist" element={<ProductList />} />
              <Route path="dailyproduction" element={<DailyProduction />} />





              <Route path="customer-view/:id" element={<MainCustomerrView />}>
                <Route path="" element={<LeadDetail />} />
                <Route path="contacts" element={<ContactTable title='Contacts' />} />
                <Route path="keep-in-touch" element={<KeepInTuch title='Keep In Touch' />} />
                <Route path="keep-in-touch-configration" element={<KitConfigration title='KIT Configration' />} />
                <Route path="notes" element={<NotesCunstomer title='Notes' />} />
                <Route path="proposals-view" element={<ProposalList style={true} />} />
                <Route path="proposal/create" element={<AddProposalPage />} />
                <Route path="expenses-view" element={<ExpenseListPage style={true} />} />
                <Route path="expense-add" element={<ExpenseListAdd />} />
                <Route path="projects-view" element={<Project style={true} />} />
                <Route path="project-add" element={<ProjectFrom style={true} />} />
                <Route path="tasks-view" element={<TasksListPage style={true} />} />
                <Route path="task/create" element={<AddNewTaskPage />} />
                <Route path="task/update/:update" element={<AddNewTaskPage />} />
                <Route path="estimates-view" element={<EstimateList style={true} title='Estimates' />} />
                <Route path="estimates-add" element={<EstimateForm style={true} title='Estimates Add' />} />
                <Route path="estimates-view-listview" element={<Estimate style={true} title='Estimates' />} />
                <Route path="tickets-view" element={<TicketsPage style={true} title='Tickets' />} />
                <Route path="service" element={<ServiceList style={true} title='Service request' />} />
                <Route path="files-view" element={<FilesPage style={true} title='Files' />} />
                <Route path="vault-view" element={<Vaultpage style={true} title='Vault' />} />
                <Route path="reminders-view" element={<ReminderPage style={true} title='Reminders' />} />
                <Route path="ledgers" element={<LeagerPage style={true} title='Ledgers' />} />
                <Route path="add-leager" element={<AddLeager style={true} title='Ledgers' />} />
                <Route path="add-leager/:update" element={<AddLeager style={true} title='Ledgers' />} />

                <Route path="quotation" element={<QuotationList style={true} title='Quotation' />} />
                <Route path="add-quotation" element={<QuotationAdd style={true} title='Quotation' />} />
                <Route path="add-quotation/:update" element={<QuotationAdd style={true} title='Quotation' />} />
              </Route>
              <Route path="ticket-add" element={<TicketForm />} />

              <Route path="day-start" element={<StartDays />} />

              <Route path="Vehicle-Type" element={<VehicleType />} />
              <Route path="create-vehicle-type" element={<VehicleTypeForm />} />
              <Route path="create-vehicle-type/:id" element={<VehicleTypeForm />} />

              <Route path="tour-type" element={<TourType />} />
              <Route path="create-tour-type" element={<ToureTypeForm />} />
              <Route path="create-tour-type/:id" element={<ToureTypeForm />} />

              <Route path="list-group" element={<GroupPage />} />
              <Route path="add-group" element={<GroupForm />} />
              <Route path="add-group/:id" element={<GroupForm />} />

              <Route path="List-News" element={<NewsPage />} />
              <Route path="Add-News" element={<NewsForm />} />
              <Route path="Add-News/:id" element={<NewsForm />} />

              {/* -----daud--new ---report---list---Account-book */}
              <Route path="kng-accountledger" element={<AccountLedgerPage />} />
              <Route path="viewAccDetail/:id" element={<AccountLedgerPageView />} />
              <Route
                path="kng-active-accountledger"
                element={<ActiveAccountLedgerPage />}
              />

              <Route path="kng-voucherlist" element={<VoucherlistPage />} />
              <Route path="kng-voucher/:name" element={<BankBookPage />} />
              {/* <Route path="kng-bankbook/:id" element={<BankBookPage />} />
              <Route path="kng-cashbook/:id" element={<BankBookPage />} /> */}
              <Route path="kng-receiptregister" element={<ReceiptRegisterPage />} />
              <Route
                path="kng-receiptregister/editBank-receipt"
                element={<EditBankReceipt />}
              />
              <Route
                path="receiptregister/editBank-receipt/kng-bill-to-bill"
                element={<BillToBill />}
              />

              <Route
                path="receiptregister/editBank-receipt/kng-userLog"
                element={<UserLog />}
              />

              <Route path="list-sales-bill" element={<SalesBills />} />
              <Route path="add-sales-bill" element={<SalesAdd />} />
              <Route path="add-sales-bill/:id" element={<SalesAdd />} />

              <Route path="list-sales-return" element={<SalesReturn />} />
              <Route path="add-sales-return" element={<SalesAddRetuen />} />
              <Route path="add-sales-return/:id" element={<SalesAddRetuen />} />

              {/* <Route path="priority_task" element={<PrirotyMaster />} />
              <Route path="add-priority_task" element={<PrirotyAdd />} />
              <Route path="add-priority_task/:id" element={<PrirotyAdd />} /> */}

              <Route path="related_master" element={<RelatedMaster />} />
              <Route path="add-related_master" element={<RelatedAdd />} />
              <Route path="add-related_master/:id" element={<RelatedAdd />} />

              <Route path="task_master" element={<PrirotyMas />} />
              <Route path="add-task_master" element={<TaskAdd />} />
              <Route path="add-task_master/:id" element={<TaskAdd />} />

              {/* junaid start */}


              <Route path="nature_master" element={<NatureMaster />} />
              <Route path="add-nature_master" element={<NatureAdd />} />
              <Route path="add-nature_master/:id" element={<NatureAdd />} />


              <Route path="Sales-Invoice-Type" element={<SalesInvoiceMaster />} />
              <Route path="add-Sales-Invoice-Type" element={<SalesInvoiceForm />} />
              <Route path="add-Sales-Invoice-Type/:id" element={<SalesInvoiceForm />} />

              <Route path="Sale-Expense-Formula" element={<SaleExpenseFormula />} />
              <Route path="add-Sale-Expense-Formula" element={<SalesExpenseForm />} />
              <Route path="add-Sale-Expense-Formula/:id" element={<SalesExpenseForm />} />


              <Route path="purchase-invoice-type" element={<PurchaseInvoiceType />} />
              <Route path="add-purchase-invoice-type" element={<AddPurchaseInvoiceType />} />
              <Route path="add-purchase-invoice-type/:id" element={<AddPurchaseInvoiceType />} />

              <Route path="purchase-expense-formula" element={<PurchaseExpenseFormula />} />
              <Route path="add-purchase-expense-formula" element={<AddPurchaseExpenseFormula />} />
              <Route path="add-purchase-expense-formula/:id" element={<AddPurchaseExpenseFormula />} />

              <Route path="Invoice-Type" element={<InvoiceMaster />} />
              <Route path="add-Invoice-Type" element={<TypeInvoiceAdd />} />
              <Route path="add-Invoice-Type/:id" element={<TypeInvoiceAdd />} />

              <Route path="Expense-Master" element={<ExpenseMaster />} />
              <Route path="add-Expense-Master" element={<ExpenseAdd />} />
              <Route path="add-Expense-Master/:id" element={<ExpenseAdd />} />

              <Route path="link-purchase-expense" element={<LinkPurchaseExpense />} />
              <Route path="link-expense-with-invoice-type" element={<LinkExpenseWithInvoiceType />} />

              <Route path="Link-Sale-Expense" element={<SalesLinksForm />} />
              <Route path="payment/phonepe" element={<PhonePayForm />} />
              <Route path="payment/razorpay" element={<RzerPayPayForm />} />

              <Route path="rems-status" element={<REMSstatus />} />
              <Route path="editpms" element={<EditPMSenquary />} />
              <Route path="editbooking" element={<Editbooking />} />
              {/* <Route path="report" element={<Report />} /> */}
              <Route path="bookingstatus" element={<BookingStatus />} />
              <Route path="property" element={<PropertyHome />} />
              <Route path="compaigs" element={<Compaigs />} />
              <Route path="newcompaigs" element={<NEwCampaigs />} />
              <Route path="bookingsnap" element={<BookingSnap />} />
              <Route path="ventures" element={<Ventures />} />
              <Route path="newventures" element={<Newventures />} />
              <Route path="floor" element={<Floor />} />
              <Route path="newfloor" element={<NewFloor />} />
              <Route path="block" element={<Block />} />
              <Route path="newblock" element={<NewBlock />} />
              <Route path="propertycharges" element={<PropertyCharges />} />
              <Route path="newpropertycharges" element={<CreatePropertyCharges />} />
              <Route path="propertyshowing" element={<PropertyShowing />} />
              <Route path="newpropertyshowing" element={<CreatePropertyShowing />} />
              <Route path="propertyunit" element={<PropertyUnit />} />
              <Route path="newpropertyunit" element={<CreatePropertyunit />} />
              <Route path="propertystages" element={<PropertyStages />} />
              <Route path="newpropertystages" element={<CreatePropertyStages />} />
              <Route path="newpropertystages" element={<CreatePropertyStages />} />
              <Route path="propertystagesplane" element={<PropertyStagePlane />} />

              <Route path="Tax-Master" element={<TaxMaster />} />
              <Route path="add-tax_master" element={<TaxAdd />} />
              <Route path="add-tax_master/:id" element={<TaxAdd />} />

              <Route path="Tax-Group" element={<TaxGroup />} />
              <Route path="add-tax_Group" element={<TaxGroupAdd />} />
              <Route path="add-tax_Group/:id" element={<TaxGroupAdd />} />

              <Route path="TCS-Master" element={<TcsMaster />} />
              <Route path="add-TCS-Master" element={<TcsAdd />} />
              <Route path="add-TCS-Master/:id" element={<TcsAdd />} />

              <Route path="assigned-doc-Master" element={<AssignedDocuments />} />
              <Route path="add-assigned-doc" element={<AssignedAdd />} />
              <Route path="add-assigned-doc/:id" element={<AssignedAdd />} />

              <Route path="wallet_report" element={<Walletreport />} />

              <Route path="mistry-list" element={<MistryMaster />} />
              <Route path="add-mistry" element={<MistryAdd />} />
              <Route path="add-mistry/:id" element={<MistryAdd />} />

              <Route path="subject_list" element={<SubjectMasters />} />
              <Route path="add-subject" element={<SubjectForm />} />
              <Route path="add-subject/:id" element={<SubjectForm />} />

              <Route path="book-code-list" element={<BookCodeMasters />} />
              <Route path="add-book-code" element={<BookCodeForm />} />
              <Route path="add-book-code/:id" element={<BookCodeForm />} />

              <Route path="account-management" element={<LeagerPage sty={false} />} />
              <Route path="add-leager" element={<AddLeager style={true} sty={false} rout={true} title='Ledgers' />} />
              <Route path="add-leager/:update" element={<AddLeager style={true} rout={true} title='Ledgers' />} />

              <Route path="projects" element={<ProjectMasters />} />
              <Route path="add-projects" element={<ProjectAddForm />} />
              <Route path="add-projects/:id" element={<ProjectAddForm />} />
              {/*<Route path="add-book-code/:id" element={<BookCodeForm />} /> */}
              <Route path="projects/:id" element={<ProjectDetailMasters />} />

              <Route path="project-module" element={<ProjectModual />} />
              <Route path="create-project-module" element={<ProjectModualForm />} />
              <Route path="create-project-module/:id" element={<ProjectModualForm />} />

              <Route path="project-module-template" element={<ProjectModualTemplate />} />
              <Route path="create-project-module-template" element={<ProjectModualTempForm />} />
              <Route path="create-project-module-template/:id" element={<ProjectModualTempForm />} />

              <Route path="business-category" element={<BussnessCateg />} />
              <Route path="create-business-category" element={<BcategForm />} />
              <Route path="create-business-category/:id" element={<BcategForm />} />





              {/* junaid ends */}

              {/* ---17:10:24---work */}

              <Route path="tdsreport" element={<TdsReportPage />} />
              <Route
                path="saleschallanreport"
                element={<SalesChallanBookPage />}
              />
              <Route path="purchallan" element={<PurchaseChallanBookPage />} />
              <Route path="gstr3b" element={<Gstr3bPage />} />
              <Route path="gstr3b/gstrIntegrity" element={<GstrIntegrity />} />
              <Route path="gstr1" element={<GstrReport1Page />} />
              <Route path="gstr2" element={<Gstr2Page />} />
              <Route path="gstr9" element={<GstReport9Page />} />
              <Route path="gstsummary" element={<GstrSummaryPage />} />

              {/* ----18:10:24--reoute */}

              <Route path="openingbalance" element={<OpeningBalancePage />} />
              <Route path="trialbalance" element={<TrialBalancePage />} />
              <Route path="trade" element={<TradingAccountPage />} />
              <Route path="pl" element={<ProfitLossPage />} />
              <Route path="pl" element={<BalanceSheetPage />} />


              <Route
                path="kng-productionReport"
                element={<ProductionReportPage />}
              />

              <Route
                path="kgn-productionReport/productionEntry"
                element={<ViewProductionEntry />}
              />
              <Route path="kng-quotationReport" element={<QuotationReportPage />} />
              <Route
                path="kng-jobwork-OutstockStatement"
                element={<JobworkOutstockStatementPage />}
              />
              <Route
                path="kng-jobworkoutOrder-Report"
                element={<JobworkoutOrderPage />}
              />
              <Route path="kng-saleorder" element={<SalesOrderBookPage />} />
              <Route path="kng-purorder" element={<PurchaseOrderBookPage />} />

              {/* travocrm */}

              <Route path="sales-count" element={<SalesPersonPage />} />
              <Route path="salesperson-wise" element={<SalesPersonWisePage />} />
              <Route path="contact-wise" element={<ContactWisePage />} />
              <Route path="lead-wise" element={<LeadWisePage />} />
              <Route path="lead-createdby" element={<LeadCreatedWisePage />} />
              {/* // */}
              <Route path="customer-type" element={<MiscellaneousPage />} />
              <Route path="invoice-company" element={<CompanyInvoicelistPage />} />
              <Route path="receipt-company" element={<CompanyRecieptlistPage />} />
              <Route path="history" element={<UserHistoryPage />} />
              <Route path="login-history-report" element={<LoginHistoryyPage />} />
              <Route path="calls-report" element={<CustomerCallsStatusPage />} />
              <Route path="user-calls-report" element={<CallByUserPage />} />
              <Route path="allleadshistory" element={<AllLeadWiseHistoryPage />} />
              <Route path="passport-visa" element={<PassportVisaExpiryPage />} />
              <Route path="todo-reminder" element={<TaskRemindersPage />} />
              <Route path="contact-user" element={<ContactReportUserWisePage />} />
              {/* // */}
              <Route path="lead-followup" element={<LeadFollowUpCallsPage />} />
              <Route path="purchase-report" element={<SupplierPurchagePage />} />
              <Route path="supplier-payment-paid-report" element={<SuplierPaidReportPage />} />
              <Route path="customer-payment-received-report" element={<CustomerPaymentReportPage />} />
              <Route path="sale-report" element={<CustomerSaleReportPage />} />
              <Route path="bill-payment-reminder-report" element={<BillPaymentReminderReportPage />} />
              <Route path="profit-loss" element={<TravelProfitLossPage />} />
              <Route path="cancel-refund" element={<CancleReportPage />} />
              <Route path="b2b-invoice" element={<B2bInvoicePage />} />
              <Route path="b2c-invoice" element={<B2cInvoicePage />} />
              <Route path="lead-booked-wise" element={<LeadBookingReport />} />
              <Route path="leadstatus-change" element={<LeadStatusChange />} />
              <Route path="no-reminderleadlist" element={<NoReminderLead />} />
              <Route path="upcomingtravelleadbooked" element={<UpComingTravel />} />
              <Route path="hotelratesreport" element={<HotelRatesReport />} />
              <Route path="branch-report" element={<BranchWiseReport />} />
              <Route path="schedulesms-report" element={<ScheduleSMS />} />
              <Route path="company-contacts" element={<ContactSgainstCompany />} />
              <Route path="tagwise" element={<TagWise />} />

              <Route path="travelsaleregister" element={<TravelsaleRegister />} />
              <Route path="travelsummery" element={<TravelSaleSummery />} />
              <Route path="travelpurchasereport" element={<TravelPurchaseReport />} />

              <Route path="sightseen-list" element={<SightseeingPage />} />
              <Route path="sightseen-add" element={<Addsightseeing />} />
              <Route path="sightseen-update/:id" element={<Addsightseeing />} />
              <Route path="viewsightseeing/:id" element={<SightseeingView />} />
              <Route path="sightseeing-ratelist/:id" element={<SightseeingRateList />} />
              <Route path="add-sightseeingrate/:id" element={<SightseeingRateAdd />} />
              <Route path="update-sightseeingrate/:id/:_id" element={<SightseeingRateAdd />} />
              <Route path="hotel-list" element={<AllHotalPage />} />
              <Route path="hotel-add" element={<HotelAdd />} />
              <Route path="hotel-update/:id" element={<HotelAdd />} />
              <Route path="tags" element={<TagsPage />} />
              <Route path="tags-add" element={<TagsAdd />} />
              <Route path="tags-update/:id" element={<TagsAdd />} />
              <Route path="travel-package-list" element={<TravelPackageListPage />} />
              <Route path="travel-package/edit/:id" element={<TravelPackageEditPage />} />
              <Route path="travel-package/create" element={<TravelPackageAddPage />} />
              <Route path="travel-master-package" element={<MasterPackageListPage />} />
              <Route path="travel-master-package/detail/:id" element={<MasterPackageDetailPage />} />
              {/* <Route path="travel-quote-list" element={<TravelQuoteListPage />} /> */}
              {/* <Route path="create-quotation" element={<QuotationInformation />} />
              <Route path="hotel-information" element={<TravelQuotationAddPage />} />
              <Route path="itenarary" element={<ItenaryAdd />} />
              <Route path="itenarary/flight" element={<FilghtAdd />} />
              <Route path="transport-information" element={<TransportInformation />} /> */}
              <Route path="travel-visa-type" element={<TravelVisaTypePage />} />
              <Route path="travel-visa-add" element={<TravelVisaTypeAdd />} />
              <Route path="travel-visa-Update/:id" element={<TravelVisaTypeAdd />} />
              <Route path="travel-visa-category" element={<TravelVisaCategoryPage />} />
              <Route path="travel-visa-category-add" element={<TravelVisaCategoryAdd />} />
              <Route path="travel-visa-category-update/:id" element={<TravelVisaCategoryAdd />} />
              <Route path="visa-master" element={<TravelVisaMasterPage />} />
              <Route path="visa-master-add" element={<TravelVisaMasterAdd />} />
              <Route path="visa-master-update/:id" element={<TravelVisaMasterAdd />} />
              <Route path="travel-insurance" element={<TravelInsurencePage />} />
              <Route path="travel-insurance-add" element={<TravelInsurenceAdd />} />
              <Route path="travel-insurance-update/:id" element={<TravelInsurenceAdd />} />
              <Route path="room-type-master" element={<RoomTypePage />} />
              <Route path="room-type-master-add" element={<RoomTypeAdd />} />
              <Route path="room-type-master-update/:id" element={<RoomTypeAdd />} />
              <Route path="travel-service" element={<ServiceeMasterrPage />} />
              <Route path="travel-servicee-add" element={<ServiceMasterAdd />} />
              <Route path="travel-servicee-update/:id" element={<ServiceMasterAdd />} />
              <Route path="travel-passport" element={<TravelPasswordPage />} />
              <Route path="travel-passport-add" element={<TravelPassportAdd />} />
              <Route path="travel-passport-update/:id" element={<TravelPassportAdd />} />
              <Route path="travel-other-master" element={<OtherMasterPage />} />
              <Route path="travel-other-master-add" element={<OtherMasterAdd />} />
              <Route path="travel-other-master-update/:id" element={<OtherMasterAdd />} />
              <Route path="travel-preference" element={<TravelPreferencePage />} />
              <Route path="travel-preference-add" element={<TravelPreferenceAdd />} />
              <Route path="travel-preference-update/:id" element={<TravelPreferenceAdd />} />
              <Route path="travel-forex" element={<TravelForexPage />} />
              <Route path="travel-forex-add" element={<TravelForexAdd />} />
              <Route path="travel-forex-update/:id" element={<TravelForexAdd />} />
              <Route path="travel-cruise" element={<TravelCruisePage />} />
              <Route path="travel-cruise-add" element={<CruiseAdd />} />
              <Route path="travel-adventure" element={<TravelAdventurePage />} />
              <Route path="travel-adventure-add" element={<TravelAdventureAdd />} />
              <Route path="travel-adventure-update/:id" element={<TravelAdventureAdd />} />
              <Route path="travel-bus-master" element={<BusMasterPage />} />
              <Route path="travel-bus-master-add" element={<BusMasterAdd />} />
              <Route path="travel-class" element={<TravelClassPage />} />
              <Route path="travel-class-add" element={<TravelClassAdd />} />
              <Route path="travel-class-update/:id" element={<TravelClassAdd />} />
              <Route path="travel-customer-type" element={<CustomerTypePage />} />
              <Route path="travel-customer-add" element={<CustomerTypeAdd />} />
              <Route path="travel-customer-update/:id" element={<CustomerTypeAdd />} />
              <Route path="travel-trip-type" element={<TripTypePage />} />
              <Route path="travel-trip-type-add" element={<TripTypeAdd />} />
              <Route path="travel-trip-type-update/:id" element={<TripTypeAdd />} />


              <Route path="travel-leads" element={<TravelLeadPage />} />
              <Route path="travel-leads-add" element={<AddLeadForm />} />
              <Route path="leads-details/:referId/:id" element={<ViewLeads />} />
              <Route path="travel-Vouchers-list" element={<TravelVoucherPage />} />
              <Route path="travel-Vouchers-Add" element={<AddHotelVoucher />} />
              <Route path="travel-service-Add" element={<AddServiceVoucher />} />
              <Route path="travel-flight-Add" element={<AddFlightVoucher />} />
              <Route path="travel-invoice-list" element={<TravelInvoice />} />
              <Route path="travel-invoice-create" element={<InvoiceAdd />} />
              <Route path="travel-payment-receipt-create" element={<AddpaymentReceipt />} />
              <Route path="travel-Credit Note" element={<CreditNoteAdd />} />
              <Route path="travel-create-flight" element={<FlightInvoiceAdd />} />

              {/* travocrm */}
              {/* ----------------Moin's Route start-------------------------------*/}
              <Route path="ele-sales-invoice" element={<SalesIvoiceListPage />} />
              <Route path="ele-sales-invoice/create" element={<AddNewSaleInvoicePage />} />
              <Route path="ele-inter-bank-stock-transfer" element={<InterBankStockTransferPage />} />
              <Route path="ele-inter-bank-stock-transfer/create" element={<AddInterBankStockTransferPage />} />
              <Route path="ele-sales-return" element={<SalesReturnPage />} />
              <Route path="ele-sales-return/create" element={<AddSaleRetunPage />} />
              <Route path="ele-sales-return/without-gst" element={<SalesRetunWithoutGstPage />} />
              <Route path="ele-sales-return/without-gst/create" element={<AddSalesReturnWithoutGstPage />} />
              <Route path="ele-BTR" element={<BtrPage />} />
              <Route path="ele-BTR/create" element={<AddBtrPage />} />
              <Route path="ele-purchase-order" element={<PurchaseOrderListPage />} />
              <Route path="ele-purchase-order/create" element={<AddPurchaseOrderPage />} />X
              <Route path="ele-purchase-invoice" element={<PurchaseInvoiceListPage />} />
              <Route path="ele-purchase-invoice/create" element={<AddPurchaseInvoicePage />} />
              <Route path="ele-purchase-return" element={<PurchaseReturnPage />} />
              <Route path="ele-purchase-return/create" element={<AddPurchaseReturnPage />} />
              <Route path="ele-purchase-return/without-gst" element={<PurchaseReturnWithoutGstPage />} />
              <Route path="ele-purchase-return/without-gst/create" element={<AddPurchaseReturnWithoutGstPage />} />
              {/* ----------------Moin's Route End-------------------------------*/}


              {/*-------------------------meraj Routes start ----------------------- */}
              <Route path="ele-pod-updation" element={<PodUpdation />} />
              <Route path="ele-generate-bill" element={<GenerateBill />} />
              <Route path="ele-close-dc-product" element={<DcProduct />} />
              <Route path="ele-close-inward-product" element={<InwardProduct />} />
              {/* 21:10:21-10-24 */}


              {/*-------------------------meraj Routes End ----------------------- */}

              {/* HAWALA ROUTES ---------------------- */}
              {/* 24:10:24 */}
              <Route path="kng-capital" element={<Capital />} />
              <Route path="depricitions" element={<Depricition />} />
              <Route path="interest" element={<Intrest />} />
              <Route path="discount/kasar/entry" element={<DiscountKasarEntry />} />
              <Route path="tdscalculations" element={<TdsCalculations />} />
              <Route path="commision-entry/report" element={<CommisionEntry />} />
              {/* ADVANCE UTILITY ---------------------- */}
              {/* 25:10:24 */}
              <Route path="product/merge" element={<ProductMerge />} />
              <Route path="city/merge" element={<CityMerge />} />
              <Route path="state/merge" element={<StateMerge />} />
              <Route path="specification/merge" element={<SpecificationMerge />} />
              <Route path="voucher/print" element={<VoucherPrint />} />
              <Route path="barcode/utility" element={<Barcodetility />} />

              {/*-------------------------26:10:24------------------------ */}
              <Route path="voucher-setup" element={<SetupVoucher />} />
              <Route path="voucher-type-list" element={<VoucherMasterList />} />
              <Route path="voucher-setup" element={<VoucherMasterList />} />
              <Route path="voucher-type/add" element={<AddVoucher />} />
              <Route path="voucher-type/edit/:id" element={<AddVoucher />} />

              {/* Tax Master */}
              <Route path="taxmaster" element={<TaxMasterPage />} />
              <Route path="taxmaster/add" element={<AddTaxMaster />} />
              <Route path="taxgroup" element={<TaxGroupPage />} />
              <Route path="taxgroup/add" element={<AddTaxGroup />} />

              {/* TCS Master */}
              <Route path="tcsmaster" element={<TcsMasterPage />} />
              <Route path="tcsmaster/add" element={<AddTcsMaster />} />
              <Route path="tcscertificate" element={<TcsCertificatePage />} />
              <Route path="tcscertificate/add" element={<AddTcsCertificate />} />

              {/* Email and Notification */}
              <Route path="email-setup" element={<EmailSetupPage />} />
              <Route path="notification-setup" element={<NotificationSetupPage />} />
              <Route path="scheduler-setup" element={<SchedulerSetupPage />} />
              <Route path="sms-setup" element={<SmsSetupPage />} />
              {/* Report and Reminder */}
              <Route path="report-setup" element={<ReportSetupPage />} />
              <Route path="reminder-setup" element={<ReminderSetupPage />} />
              <Route path="process-group-master" element={<Processgropmasterspage />} />
              <Route path="create-process-group-master" element={<Processgroupmasterform />} />
              <Route path="branch-master" element={<BranchMasterPage />} />
              <Route path="create-branch-master" element={<BranchMasterForm />} />
              <Route path="*" element={<PageNotFound />} />
              {/* <Route path="/busbookig" element={<BusBookingMain />} /> */}
              <Route path="pricemaster/list" element={<PriceMasterPage />} />
              <Route path="pricemaster/add" element={<PriceMasterAdd />} />
              <Route path="ratesheet/list" element={<RateSheetPage />} />
              <Route path="ratesheet/add" element={<RateSheertAdd />} />
              <Route path="ratesheet/add/:id" element={<RateSheertAdd />} />
              <Route path="process/list" element={<ProcessPage />} />
              <Route path="process/add" element={<ProcessAdd />} />
              <Route path="document-categories" element={<DocumentCategoriesPage />} />
              <Route path="document-categories-add" element={<DocumentCategoriesAdd />} />
              <Route path="document-categories-update/:id" element={<DocumentCategoriesAdd />} />
              <Route path="children-categories-add" element={<AddChildreenCategory />} />
              <Route path="archived-documents" element={<DocumentsArchivePage />} />
              <Route path="document-audit-trails" element={<DocumentsAuditTrailPage />} />
              <Route path="documents" element={<AllDocumentPage />} />
              <Route path="documents-add" element={<AllDocumentAdd />} />
              <Route path="documents-update/:id" element={<AllDocumentAdd />} />

              <Route path="product_unit" element={<UnitPage />} />
              <Route path="product_unit/:uid" element={<UnitPage />} />

              <Route path="product_attribute" element={<AttributesPage />} />
              <Route path="product_attribute/:uid" element={<AttributesPage />} />

              <Route path="product_brand" element={<BrandPage />} />
              <Route path="product_brand/:uid" element={<BrandPage />} />

              <Route path="product_size" element={<SizePage />} />
              <Route path="product_size/:uid" element={<SizePage />} />

              <Route path="product_color" element={<ColorsPage />} />
              <Route path="product_color/:uid" element={<ColorsPage />} />

              <Route path="product_category" element={<CategoryPage />} />
              <Route path="product_category/:uid" element={<CategoryPage />} />

              <Route path="product_industry" element={<IndustryPage />} />
              <Route path="product_industry/:uid" element={<IndustryPage />} />



              <Route path="add-product" element={<AddProductPage />} />
              <Route path="edit-product/:uid" element={<AddProductPage />} />
              <Route path="list-product" element={<ListProductPage />} />

              <Route path="coupons" element={<ListCouponPage />} />
              <Route path="coupons/create" element={<AddNewCouponPage />} />
              <Route path="club-point-configuration" element={<ClubPointConfigurationPage />} />
              <Route path="set-product-point" element={<ListSetProductPointPage />} />
              <Route path="set-product-point/create" element={<AddSetProductPointPage />} />
              <Route path="club-user-points" element={<ClubUserPointPage />} />
              <Route path="club-user-points/edit/:id" element={<UpdateClubUserPoints />} />
              <Route path="social-share-reward-point" element={<SocialRewardSharePointPage />} />
              <Route path="socialMedia-like-reward-point" element={<SocailMediaLikeRewardPointPage />} />

              <Route path="all_orders" element={<AllOrdersPage />} />
              <Route path="inhouse_orders" element={<InhouseOrderPage />} />
              <Route path="seller_orders" element={<SellerOrdersPage />} />
              <Route path="pickupPoint_orders" element={<AllPickupPointsOrderPage />} />
              <Route path="cancelled_orders" element={<AllCancelledOrdersPage />} />
              <Route path="orders_status" element={<OrdersStatuspage />} />
              <Route path="travel-hotel-type" element={<HotelTypePage />} />
              <Route path="travel-hotel-type-add" element={<HotelTypeAdd />} />
              <Route path="travel-hotel-type-Update/:id" element={<HotelTypeAdd />} />
              <Route path="travel-rating" element={<RatingPage />} />
              <Route path="travel-rating-add" element={<RatingAdd />} />
              <Route path="travel-rating-Update/:id" element={<RatingAdd />} />



              <Route path="organisation-setting/module-settings" element={<OrganisationSettings />} >
                <Route path="" element={<Reccetemplet />} />
                <Route path="design" element={<DesignSection />} />
              </Route>
              <Route path="my-task/task-manager" element={<Taskmanager setManualData={setManualData} />} >
                <Route path="" element={<TaskComent mnualData={mnualData} />} />
                {/* <Route path="design" element={<DesignSection />} /> */}
              </Route>
              {/* Shoib's Travel Crm Report Statics */}
              <Route path="hotel-voucher-report" element={<HotelVoucherPage />} />
              <Route path="transport-voucher-report" element={<TransportVoucher />} />
              <Route path="flight-voucher-report" element={<FlightVoucher />} />
              <Route path="customer-report" element={<AllCustomer />} />
              <Route path="invoice-receipt" element={<InvouceReciept />} />
              <Route path="birthday" element={<BirthdatAnniversary />} />
              <Route path="task-type" element={<TaskType />} />
              <Route path="create-task-type" element={<Tasktypeform />} />
              <Route path="update-task-type/:id" element={<Tasktypeform />} />
              <Route path="task-stage" element={<TaskStage />} />
              <Route path="create-task-stage" element={<TaskStageForm />} />
              <Route path="update-task-stage/:id" element={<TaskStageForm />} />
              <Route path="system_settings" element={<SystemSettingss />} />
              <Route path="billings-invoice" element={<InvoiceTab />} />
              <Route path="create-billings-invoice" element={<InvoiceForm />} />
              <Route path="billings-credit" element={<CancilaionTab />} />
              <Route path="billings-multiprinting" element={<MultiplePrintings />} />
              {/* <Route path="billings-hotel/cruisevoucher" element={<HotelCruieseVoucher />} /> */}
              {/* <Route path="create-billings-hotel/cruisevoucher" element={<HotelVouchers/>} /> */}              <Route path="maintenance_plan" element={<MaintenancePlan />} />


              <Route path="searchaccommodations" element={<SearchAccommodations />} />
              <Route path="availableholidayhotels" element={<Availablehotelsforyourholiday />} />
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
