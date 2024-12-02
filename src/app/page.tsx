import Menu from "@/components/Menu";
import NavigationForm from "@/components/NavigationForm";
import NavigationList from "@/components/NavigationList";


export default function Home() {
  return (
      <main className="flex  flex-col items-center border-dashed border-2 border-indigo-500 h-dvh ">
          <Menu/>
          <NavigationForm/>
          <NavigationList/>
      </main>

  );
}
