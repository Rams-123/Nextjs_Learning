import Link from "next/link";

interface NavigationItem {
  _id: number;
  title: string;
  href: string;
}

const Header = () => {
  const navigation: NavigationItem[] = [
    {
      _id: 1,
      title: "Phone",
      href: "/",
    },
    {
      _id: 2,
      title: "Phone Case",
      href: "/phonecase",
    },
    {
      _id: 3,
      title: "Watches",
      href: "/watches",
    },
    {
      _id: 4,
      title: "Accessories",
      href: "/accessories",
    },
  ];

  return (
    <div className="w-full flex bg-gray-500 sticky top-0 z-50 py-2 font-semibold ">
      <div className="flex max-w-screen-xl mx-auto h-full items-center justify-center gap-5">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item._id}
            className="uppercase hover:text-white duration-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
