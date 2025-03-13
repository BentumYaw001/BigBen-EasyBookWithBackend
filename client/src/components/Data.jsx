import email from "/src/assets/images/email-fill.svg";
import user from "/src/assets/images/person.svg";
import manicure from "/src/assets/images/manicure.svg";

export const SignUpData = [
  {
    placeholder: "Bentum",
    label: "Full Name",
    icon: user,
    type: "text",
    id: "",
    name: "fullname",
  },
  {
    placeholder: "user@gmail.com",
    label: "Email",
    icon: email,
    type: "email",
    id: "",
    name: "email",
  },
  {
    placeholder: "+233",
    label: "Phone No.",
    icon: "",
    type: "number",
    id: "",
    name: "prefix",
  },
  {
    placeholder: "password",
    label: "Password",
    icon: "",
    type: "password",
    id: "Password",
    name: "password",
  },
];

import haircut from "/src/assets/images/haircut.svg";
import makeUp from "/src/assets/images/brush.svg";
import spa from "/src/assets/images/tub.svg";
export const ServicesData = [
  {
    img: haircut,
    name: "Haircut",
  },
  {
    img: makeUp,
    name: "Make up",
  },
  {
    img: manicure,
    name: "Manicure",
  },
  {
    img: spa,
    name: "Spa",
  },
];

import Lily from "/src/assets/images/p1.svg";
import Jayden from "/src/assets/images/p2.svg";
import Alex from "/src/assets/images/p3.svg";
import Ava from "/src/assets/images/p4.svg";

export const TopSpecialist = [
  {
    img: Lily,
    name: "Lily",
    tag: "Color Queen",
  },
  {
    img: Jayden,
    name: "Jayden",
    tag: "Shave Guru",
  },
  {
    img: Alex,
    name: "Alex",
    tag: "Hair Expert",
  },
  {
    img: Ava,
    name: "Ava",
    tag: "Style Pro",
  },
];

import bookings from "/src/assets/images/bookings.svg";
import chat from "/src/assets/images/chat.svg";
import home from "/src/assets/images/profile.svg";
import explore from "/src/assets/images/explore.svg";
import person from "/src/assets/images/person-nofill.svg";
export const FooterData = [
  {
    img: home,
    name: "Home",
  },
  {
    img: explore,
    name: "Explore",
  },
  {
    img: bookings,
    name: "Bookings",
  },
  {
    img: chat,
    name: "Chat",
  },
  {
    img: person,
    name: "Profile",
  },
];

import ScreenOne from "/src/page/ScreenOne.jsx";
import ScreenTwo from "/src/page/ScreenTwo.jsx";
import ScreenThree from "/src/page/ScreenThree.jsx";
import SignUp from "/src/page/SignUp.jsx";
import SignIn from "/src/page/SignIn";
import HomePage from "/src/page/HomePage";
import Profile from "/src/page/Profile";
import EditProfile from "/src/page/EditProfile.jsx";
export const RouteData = [
  {
    path: "/",
    page: <ScreenOne />,
  },
  {
    path: "/second-screen",
    page: <ScreenTwo />,
  },
  {
    path: "/third-screen",
    page: <ScreenThree />,
  },

  {
    path: "/signup-screen",
    page: <SignUp />,
  },

  {
    path: "/signin-screen",
    page: <SignIn />,
  },

  {
    path: "/home-screen",
    page: <HomePage />,
  },
  {
    path: "/profile-screen",
    page: <Profile />,
  },
  {
    path: "/editProfile-screen",
    page: <EditProfile />,
  },
  {
    path: "/booknow-screen",
    page: <BookNowPage />,
  },
];

import LogoutArrow from "/src/assets/images/LogoutArrow.svg";
import History from "/src/assets/images/history.svg";
import Payment from "/src/assets/images/minus-circle.svg";
import Phone from "/src/assets/images/phone.svg";
import Home from "/src/assets/images/home.svg";
import BookNowPage from "../page/BookNow";

export const ProfileMenuData = [
  {
    name: "Home",
    img: Home,
    route: "/home-screen",
  },
  {
    name: "Preferences",
    img: Phone,
    route: "",
  },
  {
    name: "Payment methods",
    img: Payment,
    route: "",
  },
  {
    name: "Appointment history",
    img: History,
    route: "",
  },
  {
    name: " Log out",
    img: LogoutArrow,
    route: "/signin-screen",
  },
];

export const UserData = [
  {
    label: "Full Name",
    type: "text",
    entry: "Bentum Yaw Richmond",
  },
  {
    label: "Email",
    type: "email",
    entry: "richmondbentum2020@gmail.com",
  },
  {
    label: "Username",
    type: "text",
    entry: "BigBen",
  },
  {
    label: "Password",
    type: "password",
    entry: "Bentum Yaw Richmond",
  },
];

import shareSpa from "/src/assets/images/telegram.svg";
import direction from "/src/assets/images/direction-adjustment.svg";
import website from "/src/assets/images/globe.svg";
import message from "/src/assets/images/message.svg";
import phone from "/src/assets/images/phone.svg";
export const SpaAddress = [
  {
    img: website,
    title: "Website",
  },
  {
    img: message,
    title: "Message",
  },
  {
    img: phone,
    title: "Call",
  },
  {
    img: direction,
    title: "Direction",
  },
  {
    img: shareSpa,
    title: "Share",
  },
];

export const SpaList = [
  {
    style: "Haircut",
    type: "30 Types",
  },
  {
    style: "Haircoloring",
    type: "20 Types",
  },
  {
    style: "Hairwash",
    type: "12 Types",
  },
];

import ServicesItem from "./ServicesItem";
import SpecialistItem from "./SpecialistItem";
import PackagesItem from "./PackageItem";
import GalleryItem from "./GalleryItem";
import ReviewItem from "./ReviewItem";

export const SpaNavItem = [
  { id: "A", name: "Services", path: <ServicesItem /> },
  {
    id: "B",
    name: "Specialist",
    path: <SpecialistItem />,
  },
  { id: "C", name: "Package", path: <PackagesItem /> },
  { id: "D", name: "Gallery", path: <GalleryItem /> },
  {
    id: "E",
    name: "Review",
    path: <ReviewItem />,
  },
];

import Sally from "/src/assets/images/specialist/img11.png";
import Trudy from "/src/assets/images/specialist/img22.png";
export const SpecialistData = [
  {
    img: Sally,
    rating: "4.8",
    name: "Sally Menz",
    brand: "Hair Stylist",
  },
  {
    img: Trudy,
    rating: "4.0",
    name: "Trudy Sulley",
    brand: "Nail Stylist",
  },
];

import beard from "/src/assets/images/specialist/beard.png";
import beauty from "/src/assets/images/specialist/beau.png";
import color from "/src/assets/images/specialist/colo.png";
import hair from "/src/assets/images/specialist/hair.png";
import myhair from "/src/assets/images/specialist/myyyhair.png";
import wash from "/src/assets/images/specialist/wash.png";
export const Gallery = [
  {
    img: hair,
  },
  {
    img: beard,
  },
  {
    img: beauty,
  },
  {
    img: color,
  },
  {
    img: wash,
  },

  {
    img: myhair,
  },
];

import Avar from "/src/assets/images/specialist/re.png";
import Evans from "/src/assets/images/specialist/re 3.png";
export const ReviewData = [
  {
    img: Avar,
    name: "Ava",
    message: "I really enjoyed your service.",
  },
  {
    img: Evans,
    name: "Evans",
    message: "They did a wonderfull job for me",
  },
];

export const PackageData = [
  {
    img: hair,
    title: "Haircut and Hairstyle",
    message: "Special offer available, valid until Feb 15, 2025",
    price: "50",
  },
  {
    img: beauty,
    title: "Beauty Makeup",
    message: "Special offer available, valid until Feb 15, 2025",
    price: "150",
  },
];
