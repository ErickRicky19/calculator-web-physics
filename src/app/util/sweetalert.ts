import Swal from 'sweetalert2';

export class Sweetalert {
  public static error(title: string, text: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      timer: 3000,
      showConfirmButton: false,
      background: '#333',
      color: '#fff',
      toast: true,
      position: 'top-end',
      customClass: {
        popup: 'colored-toast',
      },
    });
  }

  public static success(title: string, text: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      timer: 2500,
      showConfirmButton: false,
      background: '#333',
      color: '#fff',
      toast: true,
      position: 'top-end',
      customClass: {
        popup: 'colored-toast',
      },
    });
  }
}
