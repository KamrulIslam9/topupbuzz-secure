import { signToken, verifyToken } from '@/lib/auth';

describe('Auth Utility', () => {
  it('should sign and verify a token', () => {
    const payload = { userId: '123', role: 'USER' };
    const token = signToken(payload);
    const decoded = verifyToken(token) as any;
    expect(decoded.userId).toBe('123');
    expect(decoded.role).toBe('USER');
  });

  it('should return null for invalid token', () => {
    expect(verifyToken('invalid')).toBeNull();
  });
});
