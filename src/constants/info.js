export const mainInfo = {
  name: "ATMANA",
  email: "atmna@atmna.com",
  phone: "01234567899",
  address: "العنوان : شارع معين الدور 3 - المعادي - القاهرة",
  description:
    "",
};





export const fetchData = async (target) => {
  // console.log(`https://box-news.allsafeeg-project.com/api/v1/${target}`)
  const res = await fetch(`https://dashboard.boxnews1.com/api/v1/${target}`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};



