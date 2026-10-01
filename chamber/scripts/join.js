const membershipDetails = {
    np: {
        title: "Non-Profit Membership",
        cost: "Free (₦0/year)",
        benefits: [
            "Standard Directory Listing",
            "Access to monthly general meetings",
            "Community networking events",
            "Basic business workshops"
        ]
    },
    bronze: {
        title: "Bronze Membership",
        cost: "₦150,000 / year",
        benefits: [
            "All Non-Profit benefits included",
            "10% discount on Chamber event tickets",
            "Quarterly professional growth seminars",
            "Direct website and social links on directory card"
        ]
    },
    silver: {
        title: "Silver Membership",
        cost: "₦350,000 / year",
        benefits: [
            "All Bronze benefits included",
            "20% discount on event tickets & trade fair booths",
            "Home Page Directory Spotlight rotation",
            "Monthly newsletter business feature"
        ]
    },
    gold: {
        title: "Gold Membership",
        cost: "₦600,000 / year",
        benefits: [
            "All Silver benefits included",
            "Free VIP admission to all Chamber events",
            "Priority top-tier Home Page Spotlight",
            "Free annual Business Expo booth space",
            "Exclusive event sponsorship opportunities"
        ]
    }
};

const modal = document.querySelector('#membership-modal');
const modalContent = document.querySelector('#modal-content');
const closeModal = document.querySelector('#close-modal');
//const modal = document.querySelector('#');

