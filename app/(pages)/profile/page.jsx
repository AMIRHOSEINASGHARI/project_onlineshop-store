import ProfilePage from "@/components/pages/profile/ProfilePage";
import { authOptions } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { StoreShopUser } from "@/utils/models/user";
import { getServerSession } from "next-auth";

const Profile = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await StoreShopUser.findOne({
    username: session.user.username,
  }).select([
    "_id",
    "username",
    "displayName",
    "phoneNumber",
    "address",
    "orders",
    "likes",
    "comments",
    "createdAt",
  ]);

  return <ProfilePage {...user} />;
};

export default Profile;
