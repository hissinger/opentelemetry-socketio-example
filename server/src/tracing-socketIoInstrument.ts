import { SocketIoInstrumentation } from "@opentelemetry/instrumentation-socket.io";
import { NodeTracerProvider } from "@opentelemetry/node";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import {
  ConsoleSpanExporter,
  BatchSpanProcessor,
} from "@opentelemetry/tracing";

const socketIoInstrumentation = new SocketIoInstrumentation();
const exporter = new ConsoleSpanExporter();
const spanProcessor = new BatchSpanProcessor(exporter);
const tracerProvider = new NodeTracerProvider();
tracerProvider.addSpanProcessor(spanProcessor);

registerInstrumentations({
  tracerProvider: tracerProvider,
  instrumentations: [socketIoInstrumentation],
});
