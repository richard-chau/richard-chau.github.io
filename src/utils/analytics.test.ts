import { describe, it, expect, vi, beforeEach } from 'vitest';
import { trackEvent, trackPageView, trackPostView, trackNavigation } from './analytics';

// Mock gtag function
const mockGtag = vi.fn();

// Mock environment variable
vi.mock('import.meta.env', () => ({
  env: {
    VITE_GA_MEASUREMENT_ID: 'G-XH6CS5SVTZ'
  }
}));

describe('Analytics', () => {
  beforeEach(() => {
    mockGtag.mockClear();
    // Mock window.gtag for each test
    Object.defineProperty(window, 'gtag', {
      value: mockGtag,
      writable: true,
    });
  });

  describe('trackEvent', () => {
    it('should call gtag with correct parameters', () => {
      trackEvent('test_action', 'test_category', 'test_label', 123);
      
      expect(mockGtag).toHaveBeenCalledWith('event', 'test_action', {
        event_category: 'test_category',
        event_label: 'test_label',
        value: 123,
      });
    });

    it('should work without optional parameters', () => {
      trackEvent('test_action', 'test_category');
      
      expect(mockGtag).toHaveBeenCalledWith('event', 'test_action', {
        event_category: 'test_category',
        event_label: undefined,
        value: undefined,
      });
    });
  });

  describe('trackPageView', () => {
    it('should call gtag with page view parameters', () => {
      trackPageView('/test-page', 'Test Page');
      
      expect(mockGtag).toHaveBeenCalledWith('config', 'G-XH6CS5SVTZ', {
        page_title: 'Test Page',
        page_location: '/test-page',
      });
    });
  });

  describe('trackPostView', () => {
    it('should track both event and page view', () => {
      trackPostView('Test Post', 'test-post');
      
      expect(mockGtag).toHaveBeenCalledTimes(2);
      expect(mockGtag).toHaveBeenCalledWith('event', 'post_view', {
        event_category: 'blog',
        event_label: 'Test Post',
        value: undefined,
      });
    });
  });

  describe('trackNavigation', () => {
    it('should track navigation event', () => {
      trackNavigation('Home Link');
      
      expect(mockGtag).toHaveBeenCalledWith('event', 'navigation_click', {
        event_category: 'navigation',
        event_label: 'Home Link',
        value: undefined,
      });
    });
  });
}); 