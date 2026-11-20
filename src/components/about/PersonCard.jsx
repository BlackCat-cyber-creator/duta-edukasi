import React from 'react';

const initialsOf = (name) =>
  String(name || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

/** Kartu profil singkat: foto (atau inisial), nama, peran, dan tautan. */
export function PersonCard({ name, subtitle, role, photo, children, links = [] }) {
  return (
    <article className="info-card person-card">
      <div className="person-card-head">
        {photo ? (
          <img className="person-avatar" src={photo} alt={`Foto ${name}`} width={88} height={88} loading="lazy" decoding="async" />
        ) : (
          <span className="person-avatar person-avatar-initials" aria-hidden="true">{initialsOf(name)}</span>
        )}
        <div className="person-card-title">
          <h3>{name}</h3>
          {subtitle && <p className="person-subtitle">{subtitle}</p>}
        </div>
      </div>
      {role && <p className="person-role">{role}</p>}
      {children}
      {links.length > 0 && (
        <p className="person-links">
          {links.map((link, i) => (
            <React.Fragment key={link.href}>
              {i > 0 && <span aria-hidden="true"> · </span>}
              {link.internal ? link.node : (
                <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
              )}
            </React.Fragment>
          ))}
        </p>
      )}
    </article>
  );
}

export default PersonCard;
