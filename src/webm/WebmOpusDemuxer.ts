import { TransformOptions } from 'stream';
import { WebmBaseDemuxer } from './WebmBaseDemuxer';

const OPUS_HEAD = Buffer.from([...'OpusHead'].map((x) => x.charCodeAt(0)));

export class WebmOpusDemuxer extends WebmBaseDemuxer {
	protected _checkHead(data: Buffer) {
		if (data.compare(OPUS_HEAD, 0, 8, 0, 8) !== 0) {
			throw Error('Audio codec is not Opus!');
		}
	}
}

export function createWebmOpusDemuxer(options?: TransformOptions) {
	return new WebmOpusDemuxer(options);
}