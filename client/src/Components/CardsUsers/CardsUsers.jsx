import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions";
import Users from "./Users/Users";

const CardsUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col mb-8">
      <div className="flex flex-col justify-center rounded-2xl w-[900px]">
        {users.map((u) => (
          <Users
            name={u.name}
            lastName={u.lastName}
            email={u.email}
            key={u.id}
            userId={u.userId}
            uid={u.uid}
            id={u.id}
          />
        ))}
      </div>
    </div>
  );
};
export default CardsUsers;
