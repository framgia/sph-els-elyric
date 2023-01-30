export default function useLocalStorage() {
  const IsAdmin = () => {
    const token = localStorage.getItem("admin_token");
    return token;
  };

  const IsUser = () => {
    const token = localStorage.getItem("token");
    return token;
  };

  return { IsAdmin, IsUser };
}
