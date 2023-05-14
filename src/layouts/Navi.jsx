import React from "react";
import { Button, Menu, Container } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu fixed="top">
        <Container>
          <Menu.Item name="Ana sayfa" />
          <Menu.Item name="İş ilanları" />
          <Menu.Item name="Adaylar" />
          <Menu.Item name="Şirketler" />
          <Menu.Menu position="right">
            <Menu.Item>
              <Button primary>Giriş yap</Button>
            </Menu.Item>
            <Menu.Item>
              <Button primary>Kayıt ol</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
