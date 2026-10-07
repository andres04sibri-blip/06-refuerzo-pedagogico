/**
 * ============================================================================
 * 🥊 RETO 03 — BotonContador (Pressable reutilizable)
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * ============================================================================
 */

import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

export type VarianteBoton = 'primary' | 'secondary' | 'danger';

export interface BotonContadorProps {
  label: string;
  onPress: () => void;
  variante?: VarianteBoton;
  disabled?: boolean;
}

export function BotonContador({
  label,
  onPress,
  variante = 'primary',
  disabled = false,
}: BotonContadorProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variante],
        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  primary: {
    backgroundColor: '#FDE047',
  },
  secondary: {
    backgroundColor: '#38BDF8',
  },
  danger: {
    backgroundColor: '#F43F5E',
  },
  label: {
    fontWeight: '800',
    fontSize: 16,
    color: '#0A0A0A',
  },
  disabled: {
    opacity: 0.4,
  },
  pressed: {
    opacity: 0.8,
  },
});
