const getUserInitials = () => {
  try {
    const auth = JSON.parse(localStorage.getItem("user_data") || "{}");
    const username = auth?.username;

    if (username && username.length >= 2) {
      return username[0] + username[username.length - 1];
    } else if (username?.length === 1) {
      return username + username;
    }
    return "??";
  } catch {
    return "??";
  }
};

const getShortDescription = (
  text: string,
  wordLimit: number,
  addEllipsis: boolean = true
): string => {
  if (!text) return "No description available.";
  const words = text.trim().split(/\s+/);
  const shortened = words.slice(0, wordLimit).join(" ");
  return words.length > wordLimit && addEllipsis
    ? `${shortened}...`
    : shortened;
};

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export { getUserInitials, getShortDescription, formatDate };
