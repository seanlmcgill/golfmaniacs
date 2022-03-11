import { createContext, useContext, FC, ReactNode, useState, useEffect, useCallback } from 'react';

interface IUser {
  id: number;
  surName: string;
  givenName: string;
  about: string;
  email: string;
  image: any;
  dob: Date;
}

interface IUserContext {
  user: IUser | null;
  loading: boolean;
  getName: () => string;
}

const UserContext = createContext<IUserContext | null>(null);

export const useUserContext = () => useContext(UserContext);

export const UserProvider: FC<ReactNode> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);
  const getName = (): string => (user ? `${user.givenName} ${user.surName}` : '');
  const contextValue: IUserContext = {
    loading,
    user,
    getName,
  };

  const loadUser = useCallback((id: number): Promise<IUser> => {
    return new Promise<IUser>((resolve) => {
      // Mock load
      setTimeout(() => {
        const user: IUser = {
          id: 1,
          surName: 'Spackler',
          givenName: 'Carl',
          email: 'carl@gmail.com',
          image: null,
          dob: new Date(1990, 1, 1),
          about:
            "What an incredible Cinderella story. This unknown comes out of nowhere to lead the pack. At Augusta, he's on his final hole. He's about 455 yards away. He's going to hit about a two iron...",
        };
        resolve(user);
      }, 300);
    });
  }, []);

  useEffect(() => {
    const loadContext = async () => {
      setLoading(true);
      const user: IUser = await loadUser(1);
      setUser(user);
      setLoading(false);
    };
    loadContext();
  }, []);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
