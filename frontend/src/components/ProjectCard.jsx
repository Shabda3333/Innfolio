import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DefaultImage from "../assets/test_image.jpg";

const ProjectCard = ({ thumbnail, user_id, project_id }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3333/api/user/${user_id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [user_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Link to={`/project/${project_id}`}>
      <div className="w-[16rem] flex flex-col gap-2">
        <div className="image-container w-full h-[15rem] bg-cover overflow-hidden rounded-2xl">
          <img
            src={`http://localhost:3333/Images/Users/${thumbnail}`}
            alt="project thumbnail"
            className="h-full"
          />
        </div>
        <div className="card-info flex justify-between items-center">
          <div className="name flex justify-center items-center gap-3">
            <div className="profile-picture w-7 h-7 bg-white rounded-full overflow-hidden">
              <img src={user?.profilePicture || DefaultImage} alt="profile" />
            </div>
            <p className="text-white text-base font-medium">
              {user?.username || "Unknown User"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
