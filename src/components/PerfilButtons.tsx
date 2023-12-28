import { Link } from "@/navigation";
import { SignOutButton } from "@/components/SignOutButton";

export const PerfilButtons = () => {
  return (
    <div className="hidden sm:flex flex-col gap-4 rounded-md shadow-lg bg-white w-[12rem] h-max py-4 px-8 absolute top-[4rem] right-0">
      <Link href="/dashboard">
        <button className="outlined w-full p-2">Dashboard</button>
      </Link>

      <Link href="/">
        <button className="contained w-full p-2">Perfil</button>
      </Link>

      <SignOutButton className="outlined p-2" />
    </div>
  );
};
