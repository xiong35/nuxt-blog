
export default (router) => {
  const permission = localStorage.getItem("permission", permission) - 0 || 0;
  if (permission < 9) {
    router.push("/admin/login")
  }
}