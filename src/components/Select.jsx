'use client';

import React, { useId, useMemo } from "react";
import { Controller } from "react-hook-form";
import _Select from "react-select";

/**
 * Select themed to match the app and force the menu to render above other content.
 *
 * Key points for z-index / stacking:
 * - Use menuPortalTarget={document.body} so the menu is portaled out of local stacking contexts.
 * - Apply a very high z-index on both menuPortal and menu.
 */
const Select = ({
  isLoading,
  options,
  onChange,
  defaultValue,
  control,
  name,
  isClearable = true,
  onClear,
  placeholder,
  menuPortalTarget,
  instanceId,
}) => {
  const generatedId = useId();
  const stableId = instanceId || generatedId;

  // If no explicit portal target is passed, default to document.body
  const portalTarget = useMemo(() => {
    if (typeof document === "undefined") return undefined;
    return menuPortalTarget || document.body;
  }, [menuPortalTarget]);

  const commonSelectProps = {
    menuPortalTarget: portalTarget,
    isClearable,
    value: defaultValue,
    options,
    isLoading,
    placeholder,
    instanceId: stableId,
    inputId: `${stableId}-input`,
    noOptionsMessage: () => <>Nenhuma opcao</>,
    styles: {
      control: (base, state) => ({
        ...base,
        minHeight: 36,
        height: 36,
        background: "rgba(15, 23, 42, 0.96)",
        borderRadius: 999,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: state.isFocused
          ? "var(--accent)"
          : "rgba(148, 163, 184, 0.45)",
        boxShadow: state.isFocused
          ? "0 0 0 1px rgba(248, 113, 113, 0.3)"
          : "none",
        cursor: "pointer",
        color: "var(--text-primary)",
        fontSize: 13.6,
        paddingLeft: 2,
        paddingRight: 2,
        "&:hover": {
          borderColor: state.isFocused
            ? "var(--accent)"
            : "rgba(148, 163, 184, 0.55)",
        },
      }),
      valueContainer: (base) => ({
        ...base,
        padding: "0 0.6rem",
      }),
      singleValue: (base) => ({
        ...base,
        color: "var(--text-primary)",
        fontSize: 13.6,
      }),
      placeholder: (base) => ({
        ...base,
        color: "var(--text-secondary)",
        fontSize: 13.6,
      }),
      input: (base) => ({
        ...base,
        color: "var(--text-primary)",
      }),
      indicatorSeparator: () => ({
        display: "none",
      }),
      indicatorsContainer: (base) => ({
        ...base,
        color: "var(--text-secondary)",
      }),
      dropdownIndicator: (base, state) => ({
        ...base,
        color: "var(--text-secondary)",
        paddingRight: 8,
        transition: "transform 0.12s ease",
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
      }),
      clearIndicator: (base) => ({
        ...base,
        color: "var(--text-secondary)",
        paddingRight: 4,
      }),
      // Crucial for being above other elements:
      menuPortal: (base) => ({
        ...base,
        zIndex: 999999, // very high to beat cards/toolbars
      }),
      menu: (base) => ({
        ...base,
        zIndex: 999999,
        marginTop: 4,
        background: "rgba(6, 8, 22, 0.98)",
        borderRadius: 12,
        border: "1px solid rgba(148, 163, 184, 0.45)",
        boxShadow: "0 18px 35px rgba(0, 0, 0, 0.6)",
        overflow: "hidden",
      }),
      menuList: (base) => ({
        ...base,
        padding: "0.25rem 0",
      }),
      option: (base, state) => ({
        ...base,
        fontSize: 13.6,
        padding: "0.35rem 0.75rem",
        cursor: "pointer",
        backgroundColor: state.isSelected
          ? "transparent"
          : state.isFocused
          ? "rgba(255, 255, 255, 0.06)"
          : "transparent",
        color: state.isSelected ? "#050814" : "var(--text-primary)",
        position: "relative",
        ...(state.isSelected && {
          backgroundImage:
            "linear-gradient(120deg, var(--accent), #ff9a3c)",
        }),
      }),
    },
  };

  if (control) {
    return (
      <Controller
        control={control}
        name={String(name)}
        render={({ field }) => (
          <_Select
            {...commonSelectProps}
            onChange={(newValue, actionMeta) => {
              if (newValue === null) {
                onClear?.();
              }
              onChange?.(newValue, actionMeta);
              field.onChange(newValue?.value);
            }}
          />
        )}
      />
    );
  }

  return (
    <_Select
      {...commonSelectProps}
      onChange={(newValue, actionMeta) => {
        if (newValue === null) {
          onClear?.();
        }
        onChange?.(newValue, actionMeta);
      }}
    />
  );
};

export { Select };
