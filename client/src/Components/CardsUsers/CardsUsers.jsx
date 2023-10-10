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
      <div className="border-2 flex justify-center item bg-blue-100 rounded-2xl gap-6 h-50">
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
