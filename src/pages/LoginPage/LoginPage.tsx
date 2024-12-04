import { Button, Input } from "@/components";
import { CircleLink } from "@/components/CircleLink";
import "./LoginPage.scss";

type SocialLink = {
  href: string;
  src: string;
  alt: string;
  className: string;
};

export const LoginPage: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { href: "#", src: "/img/icons/google.svg", alt: "Google", className: "google-link" },
    { href: "#", src: "/img/icons/google-plus.svg", alt: "Google Plus", className: "google-plus-link" },
    { href: "#", src: "/img/icons/yandex.svg", alt: "Yandex", className: "yandex-link" },
    { href: "#", src: "/img/icons/mail-ru.svg", alt: "Mail.ru", className: "mail-ru-link" },
  ];

  return (
    <div className="LoginPage">
      <h1>Авторизация</h1>
      <form action="#">
        <Input type="tel" placeholder="Номер телефона" />
        <Input type="password" placeholder="Пароль" />
        <Button>Hello</Button>
      </form>
      <a href="#">Забыли пароль?</a>
      <div className="registration">
        <span>
          У вас нет аккаунта? <a href="#">Зарегистрироваться</a>
        </span>
        <p>Войти с помощью</p>
        <div className="icons-wrapper">
          {socialLinks.map((link, index) => (
            <CircleLink
              key={index}
              href={link.href}
              src={link.src}
              alt={link.alt}
              className={link.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
