export {
  Logger,
  LoggingFunc,
  LogLevel,
} from './logger';

export {
  CodedError,
  ErrorCode,
} from './errors';

export {
  addAppMetadata,
  AgentOption,
  TLSOptions,
} from './util';

export {
  default as retryPolicies,
  RetryOptions,
} from './retry-policies';

export {
  WebClient,
  WebClientOptions,
  WebAPICallOptions,
  WebAPICallResult,
  WebAPIPlatformError,
  WebAPIRequestError,
  WebAPIReadError, // NOTE: this is no longer used, but might once again be used if a more specific means to detect it
                   // becomes evident
  WebAPIHTTPError,
  WebAPIRateLimitedError,
  WebAPIRefreshFailedError,
  WebAPICallError,
  TokenRefreshedEvent,
} from './WebClient';

export * from './methods';

export {
  RTMClient,
  RTMClientOptions,
  RTMCallResult,
  RTMPlatformError,
  RTMWebsocketError,
  RTMCallError,
} from './RTMClient';

export {
  IncomingWebhook,
  IncomingWebhookSendArguments,
  IncomingWebhookDefaultArguments,
  IncomingWebhookResult,
} from './IncomingWebhook';
