import Swal from "sweetalert2";

const showNotification = ({ title, text, icon }) => {
    Swal.fire({
        title,
        text,
        icon,
    });
};

export { showNotification };
