import React from 'react';

interface PublicRouteProps {
  element: React.ReactElement;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ element }) => {
  return element;
};

export default PublicRoute;
