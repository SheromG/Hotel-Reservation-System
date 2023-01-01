const loading = document.querySelector(".loading-wrapper");

const showLoading = () => {
  loading.classList.remove("hidden");
};

const hideLoading = () => {
  loading.classList.add("hidden");
};

const autoLoading = (callback) => {
  showLoading();
  setTimeout(() => {
    hideLoading();
    callback();
  }, 2000);
};
