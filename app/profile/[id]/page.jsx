// Profile id page.jsx

"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userAds, setUserAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch(`/api/users/${params?.id}/ads`); // Updated API endpoint
        if (!response.ok) throw new Error("Failed to fetch user ads");
        const data = await response.json();
        setUserAds(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (params?.id) fetchAds();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional services and be inspired by their expertise.`}
      data={userAds}
    />
  );
};

export default UserProfile;
