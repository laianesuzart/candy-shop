import { ref } from 'vue';

const showSnackbar = ref(false);
const message = ref('');
const color = ref('primary');
const timeout = ref(3000);

export function useToast() {
  function showToast(msg, toastColor = 'primary', toastTimeout = 3000) {
    message.value = msg;
    color.value = toastColor;
    timeout.value = toastTimeout;
    showSnackbar.value = true;
  }

  return {
    showSnackbar,
    message,
    color,
    timeout,
    showToast,
  };
}
