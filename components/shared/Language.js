import React, { useState, useMemo, useEffect } from "react";
import { Dropdown } from "@nextui-org/react";
import i18n from "../../i18n";

const Language = () => {
  const languages = [
    { name: "EN", code: "en" },
    { name: "TR", code: "tr" },
  ];

  const [selected, setSelected] = useState(new Set("en"));

  const language = useMemo(() => {
    const lng = Array.from(selected)
      .join(",")
      .replaceAll("_", " ")
      .replaceAll(",", "")
      .toUpperCase();

    i18n.changeLanguage(lng.toLowerCase());
    return lng;
  }, [selected]);

  return (
    <Dropdown>
      <Dropdown.Button flat color="secondary">
        {language}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Language"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {languages.map((language) => (
          <Dropdown.Item key={language.code}>{language.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Language;
