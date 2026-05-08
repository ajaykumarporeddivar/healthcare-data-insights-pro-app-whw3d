'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Lucide } from 'lucide-react';

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(...inputs);
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  href,
  className,
}: ButtonProps) {
  const classes = cn(
    'rounded-lg font-medium',
    {
      'bg-zinc-900 text-white hover:bg-zinc-700': variant === 'primary',
      'bg-zinc-100 text-zinc-900 hover:bg-zinc-200': variant === 'secondary',
      'bg-transparent text-zinc-900 hover:text-zinc-700': variant === 'outline',
      'bg-transparent text-zinc-900 hover:text-zinc-700 border border-zinc-200': variant === 'ghost',
      'bg-red-600 text-white hover:bg-red-500': variant === 'danger',
    },
    {
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-base': size === 'lg',
    },
    className
  );

  if (loading) {
    return (
      <button disabled={disabled} className={classes}>
        <Lucide icon="loader" className="animate-spin" />
        Loading...
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <div className={cn('bg-white border border-zinc-200 rounded-xl shadow-sm', className)}>{children}</div>;
}

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('bg-zinc-100 py-4 px-6', className)}>{children}</div>;
}

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return <h2 className={cn('text-lg font-bold', className)}>{children}</h2>;
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('py-6 px-6', className)}>{children}</div>;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'purple';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const classes = cn(
    'py-1 px-2 text-sm rounded-full',
    {
      'bg-emerald-50 text-emerald-600': variant === 'success',
      'bg-amber-50 text-amber-600': variant === 'warning',
      'bg-red-50 text-red-600': variant === 'error',
      'bg-blue-50 text-blue-600': variant === 'info',
      'bg-purple-50 text-purple-600': variant === 'purple',
      'bg-zinc-100 text-zinc-900': variant === 'default',
    }
  );

  return <span className={classes}>{children}</span>;
}

export interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: 'text' | 'password' | 'email';
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  icon,
  disabled,
  className,
}: InputProps) {
  const classes = cn(
    'block w-full rounded-md shadow-sm',
    {
      'bg-zinc-100 text-zinc-900': !disabled,
      'bg-zinc-200 text-zinc-500': disabled,
    },
    className
  );

  return (
    <div>
      <label className="block text-sm font-medium text-zinc-900">{label}</label>
      <div className="relative mt-1">
        {icon && <div className="absolute inset-y-0 left-0 flex items-center pl-3">{icon}</div>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className={classes}
        />
      </div>
      {error && <div className="mt-1 text-sm text-red-600">{error}</div>}
    </div>
  );
}

export interface SpinnerProps {
  className?: string;
}

export function Spinner({ className }: SpinnerProps) {
  return (
    <svg
      className={cn('animate-spin h-5 w-5 border-4 border-zinc-200 rounded-full border-t-zinc-600', className)}
      viewBox="0 0 24 24"
    />
  );
}

export interface AvatarProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({ name, size = 'md', className }: AvatarProps) {
  const classes = cn(
    'rounded-full',
    {
      'h-4 w-4': size === 'xs',
      'h-6 w-6': size === 'sm',
      'h-8 w-8': size === 'md',
      'h-12 w-12': size === 'lg',
    },
    className
  );

  const initials = name.split(' ').map((word) => word.charAt(0)).join('');
  const color = String.fromCharCode(name.charCodeAt(0) + 1);

  return (
    <div
      className={cn('flex justify-center items-center', classes)}
      style={{ backgroundColor: `hsl(${color}, 50%, 50%)` }}
    >
      <span className="text-white">{initials}</span>
    </div>
  );
}

export interface StatCardProps {
  title: string;
  value: string;
  change?: number;
  changeType?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  sparkline?: number[];
}

export function StatCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  sparkline,
}: StatCardProps) {
  const classes = cn(
    'flex items-center',
    {
      'text-emerald-600': changeType === 'up',
      'text-red-600': changeType === 'down',
      'text-zinc-500': changeType === 'neutral',
    }
  );

  return (
    <div>
      <div className="flex items-center">
        {icon && <div className="mr-2">{icon}</div>}
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-2xl">{value}</p>
          {change && (
            <p className={classes}>
              {changeType === 'up' ? '+' : '-'}{change}%
            </p>
          )}
        </div>
      </div>
      {sparkline && (
        <svg width="40" height="20" viewBox="0 0 40 20" className="mt-2">
          <polyline points={sparkline.map((point, index) => `${index * 2},${20 - point * 2}`).join(' ')} stroke="currentColor" />
        </svg>
      )}
    </div>
  );
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({ open, onClose, title, children, size = 'md' }: ModalProps) {
  if (!open) return null;

  const classes = cn(
    'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4',
    {
      'max-w-sm': size === 'sm',
      'max-w-md': size === 'md',
      'max-w-lg': size === 'lg',
    }
  );

  return (
    <div className={classes}>
      <div className="bg-white rounded-2xl shadow-xl animate-slideup">
        <div className="flex justify-between items-center py-4 px-6">
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-zinc-700">
            <Lucide icon="x" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="p-4 bg-zinc-100 rounded-full">{icon}</div>
      <h2 className="text-lg font-bold mt-4">{title}</h2>
      <p className="text-sm text-zinc-500 mt-2">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export interface TableProps<T> {
  columns: Array<{ key: string; label: string; render?: (row: T) => React.ReactNode }>;
  data: T[];
  onRowClick?: (row: T) => void;
}

export function Table<T>({ columns, data, onRowClick }: TableProps<T>) {
  return (
    <table className="w-full table-auto">
      <thead className="bg-zinc-100">
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="py-2 px-4 text-zinc-900">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={cn('hover:bg-zinc-50', { 'cursor-pointer': onRowClick })}
            onClick={() => onRowClick && onRowClick(row)}
          >
            {columns.map((column) => (
              <td key={column.key} className="py-2 px-4 text-zinc-600">
                {column.render ? column.render(row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}