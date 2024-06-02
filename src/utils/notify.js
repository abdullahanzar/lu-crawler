import { toast } from "react-hot-toast";

class Notify {
  success(message) {
    toast.success(message);
  }

  error(message) {
    toast.error(message);
  }

  timedSuccess(message, time) {
    toast.success(message, {
      duration: time,
    })
  }

  load(message) {
    toast.loading(message, {
      id: "loading",
    });
  }

  clearloading() {
    toast.dismiss("loading");
  } 
}

export const notify = new Notify();
